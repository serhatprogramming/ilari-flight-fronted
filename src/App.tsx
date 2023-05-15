import { useState, useEffect } from "react";
import axios from "axios";
import { getAllDiaries } from "./services/diaryService";

import { Diary } from "./types";

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  return (
    <>
      <div>
        {diaries.map((diary) => (
          <p key={diary.id}>{diary.weather}</p>
        ))}
      </div>
    </>
  );
}

export default App;
