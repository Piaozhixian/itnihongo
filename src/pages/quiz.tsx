import { Grid, CircularProgress } from "@mui/material";
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

  return (
    <Grid>
      {loading ? (
        <CircularProgress />
      ) : (
        questions.map((question) => (
          // your code to display each question goes here
          <div key={question.id}>{question.id}</div>
        ))
      )}
    </Grid>
  );
}
