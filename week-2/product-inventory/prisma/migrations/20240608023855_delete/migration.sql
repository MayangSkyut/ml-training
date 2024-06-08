/*
  Warnings:

  - You are about to drop the column `active` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `Inventory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_productId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "active";

-- DropTable
DROP TABLE "Inventory";
