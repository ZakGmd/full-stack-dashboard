-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "priority" DROP DEFAULT;

-- DropEnum
DROP TYPE "Priority";
