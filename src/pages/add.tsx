import { Button } from "@mui/material";
import firebaseApp from "@/firebaseApp";
import { getFirestore, addDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { collection, connectFirestoreEmulator } from "firebase/firestore";
import { useRouter } from "next/router";

const app = firebaseApp;
const db = getFirestore(app);

export default function Add() {
  const router = useRouter();
  const [jp, setJp] = useState("");
  const [cn, setCn] = useState("");
  const { asPath } = router;
  const { hostname } = new URL(asPath, "http://localhost");

  useEffect(() => {
    if (hostname === "localhost") {
      connectFirestoreEmulator(db, "localhost", 8080);
    }
  }, [hostname]);
  const addData = async () => {
    try {
      const q = await addDoc(collection(db, "questions"), {
        jp: jp,
        cn: cn,
      });
      alert(`Added: ${q.id}`);
      setJp("");
      setCn("");
    } catch (err) {
      console.error("Add Data Error:", err);
    }
  };

  return (
    <div>
      <h2>Add Data</h2>
      <div>
        <label>
          jp:
          <input
            type="text"
            onChange={(e) => setJp(e.target.value)}
            value={jp}
          />
        </label>
      </div>
      <div>
        <label>
          cn:
          <input
            type="text"
            onChange={(e) => setCn(e.target.value)}
            value={cn}
          />
        </label>
      </div>
      <Button onClick={addData}>Add</Button>
    </div>
  );
}
