-- DropForeignKey
ALTER TABLE `Transactions` DROP FOREIGN KEY `Transactions_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Transactions` MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
