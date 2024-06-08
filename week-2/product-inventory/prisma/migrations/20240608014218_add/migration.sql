/*
  Warnings:

  - The primary key for the `Inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `inventoryId` on the `Inventory` table. All the data in the column will be lost.
  - Added the required column `productName` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE inventory_productid_seq;
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_pkey",
DROP COLUMN "inventoryId",
ADD COLUMN     "productName" INTEGER NOT NULL,
ALTER COLUMN "productId" SET DEFAULT nextval('inventory_productid_seq'),
ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY ("productId");
ALTER SEQUENCE inventory_productid_seq OWNED BY "Inventory"."productId";
