/*
  Warnings:

  - You are about to alter the column `cost` on the `Transactions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Transactions` MODIFY `cost` DOUBLE NOT NULL;
