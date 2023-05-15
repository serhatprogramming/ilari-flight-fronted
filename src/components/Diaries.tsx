import { useState, useEffect } from "react";
import { getAllDiaries } from "../services/diaryService";
import { Diary } from "../types";

const Diaries = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);
  return (
    <>
      <h2>Diary Entries</h2>
      {diaries.map((diary) => (
        <div key={diary.id}>
          <h3>{diary.date}</h3>
          <div>
            {diary.weather} <br /> {diary.visibility}
          </div>
        </div>
      ))}
    </>
  );
};

export default Diaries;
