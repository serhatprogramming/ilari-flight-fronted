import { useState } from "react";
import { addDiary } from "../services/diaryService";
import { NewDiary } from "../types";
import { Diary } from "../types";

interface IProps {
  diaries: Diary[];
  setDiaryMethod: (diary: Diary) => void;
}

const NewDiaryEntryForm = (props: IProps) => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  const [notification, setNotification] = useState("");

  const addEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newEntry: NewDiary = { date, visibility, weather, comment };
    addDiary(newEntry).then((data) => {
      if (typeof data === "string") {
        setNotification(data);
        setTimeout(() => {
          setNotification("");
        }, 3000);
      } else {
        // const addedDiary: Diary = data;
        // props.setDiaries(props.diaries.concat(addedDiary));
        props.setDiaryMethod(data);
      }
    });

    setDate("");
    setComment("");
    setVisibility("");
    setWeather("");
  };

  return (
    <div>
      <h2>Add new entry</h2>
      {notification.length > 0 && (
        <p style={{ color: "red" }}>{notification}</p>
      )}
      <form onSubmit={addEntry}>
        <div>
          date{" "}
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div>
          visibility{" "}
          <input
            type="text"
            onChange={(e) => setVisibility(e.target.value)}
            value={visibility}
          />
        </div>
        <div>
          weather{" "}
          <input
            type="text"
            onChange={(e) => setWeather(e.target.value)}
            value={weather}
          />
        </div>
        <div>
          comment{" "}
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>

        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewDiaryEntryForm;
