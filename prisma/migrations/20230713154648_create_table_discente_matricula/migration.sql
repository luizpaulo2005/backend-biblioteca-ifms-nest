/*
  Warnings:

  - You are about to drop the column `matricula_id` on the `discente` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "discente" DROP CONSTRAINT "discente_matricula_id_fkey";

-- DropIndex
DROP INDEX "discente_matricula_id_key";

-- AlterTable
ALTER TABLE "discente" DROP COLUMN "matricula_id";

-- CreateTable
CREATE TABLE "discente_matricula" (
    "discente_id" TEXT NOT NULL,
    "matricula_id" TEXT NOT NULL,

    CONSTRAINT "discente_matricula_pkey" PRIMARY KEY ("discente_id","matricula_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "discente_matricula_matricula_id_key" ON "discente_matricula"("matricula_id");

-- AddForeignKey
ALTER TABLE "discente_matricula" ADD CONSTRAINT "discente_matricula_discente_id_fkey" FOREIGN KEY ("discente_id") REFERENCES "discente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discente_matricula" ADD CONSTRAINT "discente_matricula_matricula_id_fkey" FOREIGN KEY ("matricula_id") REFERENCES "matricula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
