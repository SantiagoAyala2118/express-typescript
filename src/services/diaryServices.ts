
import type { DiaryEntries, NewDiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Wheather } from "../types.js";
import dairyData from "./diary.json" with {type:'json'}

const diaries: Array<DiaryEntries> = dairyData as Array<DiaryEntries>

export const getEntries = () => diaries;

export const findById = (id:number): NonSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find(d => d.id === id)
    if(entry != null){
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
}

export const getEntriesWithoutSensitiveInfo = ():Array<NonSensitiveInfoDiaryEntry> => {
    return diaries.map(({id, date, wheather, visibility}) =>{
       return{ 
        id, 
        date,
        wheather,
        visibility
    }
})
}

export const addDiary = (newDiaryEntry:NewDiaryEntry):DiaryEntries => {
    const newDiary = {
        id:diaries.length + 1,
    ...newDiaryEntry}
    diaries.push(newDiary)
    return newDiary
};
