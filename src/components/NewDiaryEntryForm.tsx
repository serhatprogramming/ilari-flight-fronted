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
  const [visibility, setVisibility] = useState("great");
  const [weather, setWeather] = useState("sunny");
  const [comment, setComment] = useState("");

  const [notification, setNotification] = useState("");

  const visibilitySelected = (value: string) => {
    setVisibility(value);
  };
  const weatherSelected = (value: string) => {
    setWeather(value);
  };

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
          <div>
            visibility: great
            <input
              type="radio"
              name="filterVisibility"
              onChange={() => visibilitySelected("great")}
            />
            good{" "}
            <input
              type="radio"
              name="filterVisibility"
              onChange={() => visibilitySelected("good")}
            />
            ok{" "}
            <input
              type="radio"
              name="filterVisibility"
              onChange={() => visibilitySelected("ok")}
            />
            poor{" "}
            <input
              type="radio"
              name="filterVisibility"
              onChange={() => visibilitySelected("poor")}
            />
          </div>
        </div>

        <div>
          <div>
            weather: sunny
            <input
              type="radio"
              name="filter"
              onChange={() => weatherSelected("sunny")}
            />
            rainy{" "}
            <input
              type="radio"
              name="filter"
              onChange={() => weatherSelected("rainy")}
            />
            cloudy{" "}
            <input
              type="radio"
              name="filter"
              onChange={() => weatherSelected("cloudy")}
            />
            stormy{" "}
            <input
              type="radio"
              name="filter"
              onChange={() => weatherSelected("stormy")}
            />
            windy{" "}
            <input
              type="radio"
              name="filter"
              onChange={() => weatherSelected("windy")}
            />
          </div>
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
