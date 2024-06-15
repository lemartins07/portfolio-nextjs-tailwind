-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "begin" VARCHAR(10) NOT NULL,
    "end" VARCHAR(10),
    "certificateLink" VARCHAR(255),

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);
