import { Router } from "express";
import { pool } from "../database/database";
import { except } from "drizzle-orm/gel-core";
const router = Router();

router.post('/cadastro', async(req, res) =>{
    try{ 
        const values = [req.body.nome, req.body.telefone, req.body.email, req.body.senha, req.body.status]
        const results = await pool.query("INSERT INTO Vendedor VALUES ") 
        return
    }
    catch (e){
        res.send(e)
    }
})