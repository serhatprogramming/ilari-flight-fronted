import { useState } from "react";

const NewDiaryEntryForm = () => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  const addEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newEntry = { date, visibility, weather, comment };
    console.log("hello people", newEntry);
    setDate("");
    setComment("");
    setVisibility("");
    setWeather("");
  };

  return (
    <div>
      <h2>Add new entry</h2>
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
