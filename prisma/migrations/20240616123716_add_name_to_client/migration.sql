/*
  Warnings:

  - You are about to drop the column `name` on the `personal_data` table. All the data in the column will be lost.
  - Added the required column `name` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clients` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `personal_data` DROP COLUMN `name`;
