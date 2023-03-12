import { initializeApp } from "firebase/app";
import {collection, getFirestore, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import {Box, Button, Container} from '@mui/material';
import {useState} from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

function Home() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  const [questionWord, setQuestionWord] = useState()
  const [answer, setAnswer] = useState()
  const [selections, setSelections] = useState<string[]>([])
  async function getData () {
    const wordsRef = collection(db, 'words')
    const q = query(wordsRef, orderBy('ja'),limit(1))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      setQuestionWord(doc.data().ja)
      setAnswer(doc.data().cn)
    })
    const wrongSelectionsQuery = query(wordsRef,where("ja", "!=", "テスト" ),limit(3))
    const wrongSelectionsQuerySnapshot = await getDocs(wrongSelectionsQuery)
    const arr: string[] = []
    wrongSelectionsQuerySnapshot.forEach((doc) => {
      arr.push(doc.data().cn)
    })
    setSelections(arr)
  }
  // getData()

  return (
    <Container>
      <Box>
        {questionWord}
      </Box>
    </Container>
  )
}

export default Home;
