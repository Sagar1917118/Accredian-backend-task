/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Accradianreferal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sender_name` VARCHAR(191) NOT NULL,
    `sender_id` VARCHAR(191) NULL,
    `sender_email` VARCHAR(191) NOT NULL,
    `target_name` VARCHAR(191) NOT NULL,
    `target_id` VARCHAR(191) NULL,
    `target_email` VARCHAR(191) NOT NULL,
    `target_phone` VARCHAR(191) NOT NULL,
    `course_name` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
