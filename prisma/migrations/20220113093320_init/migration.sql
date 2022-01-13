-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "budget" INTEGER NOT NULL,
    "original_language" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "popularity" REAL NOT NULL,
    "poster_path" TEXT,
    "release_date" TEXT NOT NULL,
    "revenue" BIGINT NOT NULL,
    "runtime" INTEGER,
    "status" TEXT NOT NULL
);
