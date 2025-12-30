
import type { DiaryEntries } from "../types.js";
import dairyData from "./diary.json" with {type:'json'}

const diaries: Array<DiaryEntries> = dairyData as Array<DiaryEntries>

export const getEntries = () => diaries;

export const addEntry = () => null;
