import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
import {errors} from 'celebrate'

const app = express();
app.use(cors());
//Habilita para ler o body da requisição
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors())

app.listen(3333);