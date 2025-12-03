// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Carrega as variáveis de ambiente (.env)
dotenv.config();

export default defineConfig({
  schema: "./src/database/schemas.ts", // Onde está o teu código das tabelas
  out: "./drizzle",             // Onde os ficheiros SQL das migrations serão salvos
  dialect: "postgresql",        // O tipo de banco de dados
  dbCredentials: {
    url: process.env.DATABASE_URL!, // A URL de conexão do teu banco
  },
});