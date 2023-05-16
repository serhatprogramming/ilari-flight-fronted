import Diaries from "./components/Diaries";
import NewDiaryEntryForm from "./components/NewDiaryEntryForm";
import { useState, useEffect } from "react";
import { getAllDiaries } from "./services/diaryService";
import { Diary } from "./types";
function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  const setDiaryMethod = (diary: Diary) => {
    setDiaries(diaries.concat(diary));
  };

  return (
    <>
      <NewDiaryEntryForm setDiaryMethod={setDiaryMethod} diaries={diaries} />
      <Diaries diaries={diaries} />
    </>
  );
}

export default App;
