import axios from "axios";
import { Diary, NewDiary } from "../types";

const urlDiaries = "http://localhost:3001/api/diaries";

export const getAllDiaries = () => {
  return axios.get<Diary[]>(urlDiaries).then((response) => response.data);
};

export const addDiary = (newDiary: NewDiary) => {
  return axios
    .post(urlDiaries, newDiary)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};
