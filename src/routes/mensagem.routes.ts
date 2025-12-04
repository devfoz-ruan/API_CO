import { Router } from "express";
import { mensagemtest } from "../controllers/mensagem.controller";

export const mensagemRouter = Router()

mensagemRouter.get('/', mensagemtest)