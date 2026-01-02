import dairyData from "./diary.json" with { type: 'json' };
const diaries = dairyData;
export const getEntries = () => diaries;
export const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const { comment, ...restOfDiary } = entry;
        return restOfDiary;
    }
};
export const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, wheather, visibility }) => {
        return {
            id,
            date,
            wheather,
            visibility
        };
    });
};
export const addDiary = (newDiaryEntry) => {
    const newDiary = {
        id: diaries.length + 1,
        ...newDiaryEntry
    };
    diaries.push(newDiary);
    return newDiary;
};
