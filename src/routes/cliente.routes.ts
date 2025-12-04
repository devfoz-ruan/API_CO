import { Router } from "express";
import { clientetest } from "../controllers/cliente.controller";

export const clienteRouter = Router();

clienteRouter.get('/', clientetest);