import { Router } from "express";

export const diariesRouter = Router();

diariesRouter.get("/", (_req, res) => {
  res.send("Finding all diaries");
});

diariesRouter.post("/", (_req, res) => {
  res.send("Saving a diary");
});
