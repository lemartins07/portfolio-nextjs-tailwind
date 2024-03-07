-- CreateTable
CREATE TABLE "User" (
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "skill" VARCHAR(255),
    "id" SERIAL NOT NULL,
    "image" VARCHAR(255),
    "bio" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

