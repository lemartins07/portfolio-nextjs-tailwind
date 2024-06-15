-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" VARCHAR(255),
ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "experience" TIMESTAMP(3),
ADD COLUMN     "freelance" BOOLEAN,
ADD COLUMN     "language" VARCHAR(255);
