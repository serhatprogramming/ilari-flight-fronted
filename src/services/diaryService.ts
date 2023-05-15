import axios from "axios";
import { Diary } from "../types";

const urlDiaries = "http://localhost:3001/api/diaries";

export const getAllDiaries = () => {
  return axios.get<Diary[]>(urlDiaries).then((response) => response.data);
};
