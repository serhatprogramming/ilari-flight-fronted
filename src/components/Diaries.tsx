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
        <>
          <h3 key={diary.id}>{diary.date}</h3>
          <div key={diary.id}>
            {diary.weather} <br /> {diary.visibility}{" "}
          </div>
        </>
      ))}
    </>
  );
};

export default Diaries;
