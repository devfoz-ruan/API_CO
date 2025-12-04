import { pool } from "../database/database";

export const cadastroVendedor =  async(req:any, res:any) =>{
    try{ 
        const values = [req.body.nome, req.body.telefone, req.body.email, req.body.senha, true]
        const idresult = await pool.query("INSERT INTO pessoa (nome, telefone, email, senha, status) VALUES ($1, $2, $3, $4, $5) RETURNING id", values);
        const valuesVend = [idresult, req.body.idSetor, req.body.idCargo] 
        const vendedor = await pool.query("INSERT INTO vendedor (id, idSetor, idCargo) VALUES ($1, $2, $3)",valuesVend)
        res.send("Vendedor Cadastrado com Sucesso")
    }
    catch (e){
        console.error(e);
        res.status(500).json({ error: "Erro ao conectar no banco" });
    }
}