import {
  Grid,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import firebaseApp from "@/firebaseApp";
import { getFirestore, DocumentData } from "@firebase/firestore";
import {
  collection,
  connectFirestoreEmulator,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QuizTitle from "@/components/atoms/QuizTitle";
import Selections from "@/components/organisms/Selections";
import makeOptions from "@/utils/makeOptions";

const app = firebaseApp;
const db = getFirestore(app);

/**
 * 问题页面
 * - 从数据库获取问题并生成数组
 * - 显示每个问题并生成每个问题的选项
 */
export default function Quiz() {
  const router = useRouter();
  const { asPath } = router;
  const { hostname } = new URL(asPath, "http://localhost");
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([] as DocumentData[]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionOptions, setCurrentQuestionOptions] = useState<
    string[]
  >([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const isEmulating = hostname === "localhost";
        if (isEmulating) {
          connectFirestoreEmulator(db, "localhost", 8080);
        }
        const querySnapshot = await getDocs(collection(db, "questions"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [hostname]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
      setCurrentQuestionOptions(
        makeOptions(questions[currentQuestionIndex + 1].cn)
      );
    } else {
      setShowResult(true);
    }
  };

  return (
    <Grid>
      {loading ? (
        <CircularProgress />
      ) : showResult ? (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>问题</TableCell>
                  <TableCell>你的选项</TableCell>
                  <TableCell>正确选项</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedOptions.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{questions[index].jp}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{questions[index].cn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <QuizTitle text={questions[currentQuestionIndex].jp} />
          <Selections
            selections={
              currentQuestionOptions.length
                ? currentQuestionOptions
                : makeOptions(questions[currentQuestionIndex].cn)
            }
            answer={questions[currentQuestionIndex].cn}
            onSelectionClick={(e) => {
              handleOptionClick(e.currentTarget.innerText);
            }}
          />
        </>
      )}
    </Grid>
  );
}
