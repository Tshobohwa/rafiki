/*
  Warnings:

  - You are about to drop the column `fileData` on the `Material` table. All the data in the column will be lost.
  - Made the column `url` on table `Material` required. This step will fail if there are existing NULL values in that column.

*/
-- First, update existing NULL urls with a placeholder (will be updated by application)
UPDATE "Material" SET "url" = 'migrating' WHERE "url" IS NULL;

-- AlterTable
ALTER TABLE "Material" DROP COLUMN "fileData",
ALTER COLUMN "url" SET NOT NULL;
