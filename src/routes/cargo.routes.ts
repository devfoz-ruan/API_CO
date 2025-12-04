import { Router } from "express";
import { buscarCargo, procurarCargo } from "../controllers/cargo.controller";

export const cargoRouter = Router();

cargoRouter.get("/", buscarCargo);
cargoRouter.get("/:id", procurarCargo);


