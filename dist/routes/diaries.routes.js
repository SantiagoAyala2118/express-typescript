import { Router } from "express";
import * as diaryServices from "../services/diaryServices.js";
import toNewDiaryEntry from "../utils.js";
export const diariesRouter = Router();
diariesRouter.get("/", (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
diariesRouter.get("/:id", (req, res) => {
    const diary = diaryServices.findById(Number(req.params.id));
    res.send(diary);
});
diariesRouter.post("/", (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        return res.json(addedDiaryEntry);
    }
    catch (e) {
        return res.status(400).json(e.message);
    }
});
