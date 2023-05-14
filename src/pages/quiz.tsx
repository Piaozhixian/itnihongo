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

const app = firebaseApp;
const db = getFirestore(app);

export default function Quiz() {
  const router = useRouter();
  const { asPath } = router;
  const { hostname } = new URL(asPath, "http://localhost");
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([] as DocumentData[]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
  };

  return (
    <Grid>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div>
            {questions[currentQuestionIndex].jp}：{" "}
            {questions[currentQuestionIndex].cn}
          </div>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNextQuestionClick}>下一题</Button>
          ) : null}
        </>
      )}
    </Grid>
  );
}
