import { Diary } from "../types";

export interface DiaryArray {
  diaries: Diary[];
}

const Diaries = (props: DiaryArray) => {
  return (
    <>
      <h2>Diary Entries</h2>
      {props.diaries.map((diary) => (
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
