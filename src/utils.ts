import { parse } from "node:path";
import { Wheather, Visibility, type NewDiaryEntry } from "./types.js";

const parseComment = (comment: string): string => {
  if (typeof comment !== "string") {
    throw new Error("Incorrect or missing comment");
  }

  return comment;
};

const parseDate = (dateFromReques: any): string => {
  if (!isString(dateFromReques) || !isDate(dateFromReques)) {
    throw new Error("Incorrect or mising date");
  }

  return dateFromReques;
};

const parseWheather = (wheatherFromRequest: any): Wheather => {
  if (!isString(wheatherFromRequest) || !isWheather(wheatherFromRequest)) {
    throw new Error("Incorrect or missing Wheather");
  }

  return wheatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing Visibility");
  }

  return visibilityFromRequest;
};

const isString = (string: any): boolean =>
  typeof string === "string" || string instanceof String;

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWheather = (param: any): boolean => {
  return Object.values(Wheather).includes(param);
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    wheather: parseWheather(object.wheather),
    visibility: parseVisibility(object.visibility),
  };

  return newEntry;
};

export default toNewDiaryEntry;
