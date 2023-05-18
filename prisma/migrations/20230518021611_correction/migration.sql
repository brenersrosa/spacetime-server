/*
  Warnings:

  - You are about to drop the column `createdAte` on the `memories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `memories` DROP COLUMN `createdAte`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
