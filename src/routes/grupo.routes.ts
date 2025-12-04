import { Router } from "express";
import { grupotest } from "../controllers/grupo.controller";

export const grupoRouter = Router()

grupoRouter.get('/', grupotest)