CREATE TABLE `product` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`prdname` VARCHAR(255) NOT NULL,
	`price` INT UNSIGNED ZEROFILL NULL,
	`content` TEXT NULL,
	`createdAt` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);