-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
