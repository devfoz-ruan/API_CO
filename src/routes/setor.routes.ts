import { Router } from "express";
import { buscarSetor } from "../controllers/setor.controller";


export const setorRouter = Router();

setorRouter.get("/setor", buscarSetor );


