/*
  Warnings:

  - The `palavras_chave` column on the `pesquisa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pesquisa" DROP COLUMN "palavras_chave",
ADD COLUMN     "palavras_chave" TEXT[];
