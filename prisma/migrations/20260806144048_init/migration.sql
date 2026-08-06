-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COLLECTED', 'WISH');

-- CreateTable
CREATE TABLE "Vinyls" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "launchDate" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'WISH',

    CONSTRAINT "Vinyls_pkey" PRIMARY KEY ("id")
);
