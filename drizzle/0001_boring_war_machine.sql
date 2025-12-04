CREATE TABLE "cargo" (
	"id" serial PRIMARY KEY NOT NULL,
	"texto" text NOT NULL,
	"permissoes" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pessoa" RENAME COLUMN "online" TO "status";--> statement-breakpoint
ALTER TABLE "vendedor" RENAME COLUMN "permissoes" TO "idCargo";--> statement-breakpoint
ALTER TABLE "vendedor" ADD CONSTRAINT "vendedor_idCargo_cargo_id_fk" FOREIGN KEY ("idCargo") REFERENCES "public"."cargo"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vendedor" DROP COLUMN "cargo";