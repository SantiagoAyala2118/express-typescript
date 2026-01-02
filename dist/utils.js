import { parse } from "node:path";
import { Wheather, Visibility } from "./types.js";
const parseComment = (comment) => {
    if (typeof comment !== "string") {
        throw new Error("Incorrect or missing comment");
    }
    return comment;
};
const parseDate = (dateFromReques) => {
    if (!isString(dateFromReques) || !isDate(dateFromReques)) {
        throw new Error("Incorrect or mising date");
    }
    return dateFromReques;
};
const parseWheather = (wheatherFromRequest) => {
    if (!isString(wheatherFromRequest) || !isWheather(wheatherFromRequest)) {
        throw new Error("Incorrect or missing Wheather");
    }
    return wheatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) ||
        !isVisibility(visibilityFromRequest)) {
        throw new Error("Incorrect or missing Visibility");
    }
    return visibilityFromRequest;
};
const isString = (string) => typeof string === "string" || string instanceof String;
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWheather = (param) => {
    return Object.values(Wheather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(Visibility).includes(param);
};
export const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        wheather: parseWheather(object.wheather),
        visibility: parseVisibility(object.visibility),
    };
    return newEntry;
};
export default toNewDiaryEntry;
