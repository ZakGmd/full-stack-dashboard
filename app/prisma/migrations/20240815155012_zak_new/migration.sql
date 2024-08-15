/*
  Warnings:

  - You are about to drop the column `assignToId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `taskName` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `udpadetAt` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignToId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "assignToId",
DROP COLUMN "createdAt",
DROP COLUMN "priority",
DROP COLUMN "status",
DROP COLUMN "taskName",
DROP COLUMN "title",
DROP COLUMN "udpadetAt";
