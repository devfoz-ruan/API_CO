import { Router } from "express";
import { cadastroVendedor } from "../controllers/usuario.controller";

export const usuarioRouter = Router();
usuarioRouter.post('/cadastro', cadastroVendedor)
