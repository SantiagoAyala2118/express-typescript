//* Importaciones
import express from "express";
import { diariesRouter } from "./routes/diaries.routes.js";

const app = express();
const PORT = 4000;

//* Middlewares
app.use(express.json());

//* endpoints
app.get("/ping", (_req, res) => {
  console.log("funcionando");
  res.send("pong");
});

app.use("/api/diaries", diariesRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
