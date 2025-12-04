import { Router } from "express";
import { teste } from "../controllers/teste.controller";


export const testRouter = Router();

testRouter.get("/test-db", teste);
