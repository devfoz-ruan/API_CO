import { boolean, integer,  pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const pessoa = pgTable("pessoa", {
    id: serial("id").primaryKey(),
    nome: text("nome").notNull(),
    telefone: text("telefone").unique().notNull(),
    email: text("email").unique(),
    senha: text("senha").notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
    deletedAt: timestamp("deletedAt"),
    status: boolean("status").notNull(),
});

export const cliente = pgTable("cliente",{
    id: integer("id").notNull()
        .references(() => pessoa.id)
        .primaryKey(),
    ativo: boolean("ativo").notNull()
});
export const vendendor = pgTable("vendedor",{
    id: integer("id").notNull()
        .references(() => pessoa.id)
        .primaryKey(),
    idSetor: integer("idSetor").notNull().references(()=> setor.id),
    idCargo: integer("idCargo").notNull().references(()=> cargo.id)
});

export const pais= pgTable("pais",{
    id: serial("id").primaryKey(),
    nome: text("nome").notNull().unique(),
})

export const estado= pgTable("estado",{
    id: serial("id").primaryKey(),
    nome: text("nome").notNull(),
    idPais: integer("idPais").notNull().references(() => pais.id)
})

export const cidade= pgTable("cidade",{
    id: serial("id").primaryKey(),
    nome: text("nome").notNull(),
    idEstado: integer("idEstado").notNull().references(() => estado.id)
})
export const endereco= pgTable("endereco",{
    id: serial("id").primaryKey(),
    logradouro:  text("logradouro").notNull(),
    complemento: text("complemento"),
    idCidade: integer("idCidade").references(() => cidade.id)
})
export const enderecoLoja= pgTable("enderecoLoja",{
    id: serial("id").primaryKey(),
    idLoja: integer("idLoja").notNull().references(() => lojas.id),
    idEndereco: integer("idEndereco").notNull().references(() => endereco.id)
})

export const lojas = pgTable("lojas",{
    id: serial("id").primaryKey(),
    cod: text("cod").notNull(),
    nome: text("nome").notNull()
})

export const setor = pgTable("setor",{
    id: serial("id").primaryKey(),
    idLoja: integer("idLoja").notNull().references(() => lojas.id),
    nome: text("nome").notNull(),
});

export const grupo = pgTable("grupo", {
    id: serial("id").primaryKey(),
    nome: text().notNull(),
    idSetor: integer("idSetor").references(()=>setor.id)
})

export const grupoVendedores = pgTable("grupoVendedores", {
    id: serial("id").primaryKey(),
    grupoid: integer("grupoid").references(()=>grupo.id).notNull(),
    idVendedores: integer("idVendedores").references(()=> vendendor.id).notNull(),
})

export const mensagem = pgTable("mensagem",{
    id: serial("id").primaryKey(),
    idCliente: integer("idCliente").notNull().references(()=> cliente.id),
    idGrupo: integer("idGrupo").notNull().references(()=> grupo.id),
    texto: text("texto").notNull(),
    sessionId: text("sessionId").notNull(), 
    chatId: text("chatId").notNull(), 
    id_Vendedor: integer("idVendedor").notNull().references(()=> vendendor.id),
    cliORvend: boolean().notNull()
})

export const cargo = pgTable("cargo", {
    id: serial("id").primaryKey(),
    texto : text("texto").notNull(),
    permissoes: integer("permissoes").notNull()
})
