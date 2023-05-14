import { Grid, CircularProgress, Button } from "@mui/material";
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

  const handleNextQuestionClick = () => {
    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
    setCurrentQuestionOptions(
      makeOptions(questions[currentQuestionIndex + 1].cn)
    );
  };

  return (
    <Grid>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <QuizTitle text={questions[currentQuestionIndex].jp} />
          <>
            <Selections
              selections={
                currentQuestionOptions.length
                  ? currentQuestionOptions
                  : makeOptions(questions[currentQuestionIndex].cn)
              }
              answer={questions[currentQuestionIndex].cn}
            />
            <Button onClick={handleNextQuestionClick}>下一题</Button>
          </>
        </>
      )}
    </Grid>
  );
}
