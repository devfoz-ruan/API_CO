import { pool } from "../database/database";

export const procurarCargo =  async (req:any, res:any) => {
  try {
    const result = await pool.query("SELECT * FROM cargo where id = $1", [req.params.id]);
    res.json(result.rows)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao conectar no banco" });
  }
};

export const buscarCargo = async (req:any, res:any) => {
  try {
    const result = await pool.query("SELECT * FROM cargo");
    res.json(result.rows)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao conectar no banco" });
  }
}