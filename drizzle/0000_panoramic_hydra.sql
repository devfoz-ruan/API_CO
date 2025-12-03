CREATE TABLE "cidade" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"idEstado" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cliente" (
	"id" integer PRIMARY KEY NOT NULL,
	"ativo" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "endereco" (
	"id" serial PRIMARY KEY NOT NULL,
	"logradouro" text NOT NULL,
	"complemento" text,
	"idCidade" integer
);
--> statement-breakpoint
CREATE TABLE "enderecoLoja" (
	"id" serial PRIMARY KEY NOT NULL,
	"idLoja" integer NOT NULL,
	"idEndereco" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "estado" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"idPais" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grupo" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"idSetor" integer
);
--> statement-breakpoint
CREATE TABLE "grupoVendedores" (
	"id" serial PRIMARY KEY NOT NULL,
	"grupoid" integer NOT NULL,
	"idVendedores" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lojas" (
	"id" serial PRIMARY KEY NOT NULL,
	"cod" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "mensagem" (
	"id" serial PRIMARY KEY NOT NULL,
	"idCliente" integer NOT NULL,
	"idGrupo" integer NOT NULL,
	"texto" text NOT NULL,
	"sessionId" text NOT NULL,
	"chatId" text NOT NULL,
	"idVendedor" integer NOT NULL,
	"cliORvend" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pais" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	CONSTRAINT "pais_nome_unique" UNIQUE("nome")
);
--> statement-breakpoint
CREATE TABLE "pessoa" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"telefone" text NOT NULL,
	"email" text,
	"senha" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"deletedAt" timestamp,
	"online" boolean NOT NULL,
	CONSTRAINT "pessoa_telefone_unique" UNIQUE("telefone"),
	CONSTRAINT "pessoa_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "setor" (
	"id" serial PRIMARY KEY NOT NULL,
	"idLoja" integer NOT NULL,
	"nome" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vendedor" (
	"id" integer PRIMARY KEY NOT NULL,
	"idSetor" integer NOT NULL,
	"cargo" text NOT NULL,
	"permissoes" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cidade" ADD CONSTRAINT "cidade_idEstado_estado_id_fk" FOREIGN KEY ("idEstado") REFERENCES "public"."estado"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_id_pessoa_id_fk" FOREIGN KEY ("id") REFERENCES "public"."pessoa"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_idCidade_cidade_id_fk" FOREIGN KEY ("idCidade") REFERENCES "public"."cidade"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "enderecoLoja" ADD CONSTRAINT "enderecoLoja_idLoja_lojas_id_fk" FOREIGN KEY ("idLoja") REFERENCES "public"."lojas"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "enderecoLoja" ADD CONSTRAINT "enderecoLoja_idEndereco_endereco_id_fk" FOREIGN KEY ("idEndereco") REFERENCES "public"."endereco"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "estado" ADD CONSTRAINT "estado_idPais_pais_id_fk" FOREIGN KEY ("idPais") REFERENCES "public"."pais"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_idSetor_setor_id_fk" FOREIGN KEY ("idSetor") REFERENCES "public"."setor"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grupoVendedores" ADD CONSTRAINT "grupoVendedores_grupoid_grupo_id_fk" FOREIGN KEY ("grupoid") REFERENCES "public"."grupo"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grupoVendedores" ADD CONSTRAINT "grupoVendedores_idVendedores_vendedor_id_fk" FOREIGN KEY ("idVendedores") REFERENCES "public"."vendedor"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mensagem" ADD CONSTRAINT "mensagem_idCliente_cliente_id_fk" FOREIGN KEY ("idCliente") REFERENCES "public"."cliente"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mensagem" ADD CONSTRAINT "mensagem_idGrupo_grupo_id_fk" FOREIGN KEY ("idGrupo") REFERENCES "public"."grupo"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mensagem" ADD CONSTRAINT "mensagem_idVendedor_vendedor_id_fk" FOREIGN KEY ("idVendedor") REFERENCES "public"."vendedor"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "setor" ADD CONSTRAINT "setor_idLoja_lojas_id_fk" FOREIGN KEY ("idLoja") REFERENCES "public"."lojas"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vendedor" ADD CONSTRAINT "vendedor_id_pessoa_id_fk" FOREIGN KEY ("id") REFERENCES "public"."pessoa"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vendedor" ADD CONSTRAINT "vendedor_idSetor_setor_id_fk" FOREIGN KEY ("idSetor") REFERENCES "public"."setor"("id") ON DELETE no action ON UPDATE no action;