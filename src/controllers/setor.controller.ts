import { pool } from "../database/database";

export const buscarSetor = async (req:any, res:any) => {
  try {
    const result = await pool.query("SELECT * FROM setor");
    res.json(result.rows)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao conectar no banco" });
  }
}