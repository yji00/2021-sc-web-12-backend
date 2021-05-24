# SQL 학습
## 1. Database 만들기

```sql
--database 만들기
CREATE DATABASE shop DEFAULT CHARACTER SET utf8;

--database 보기
SHOW database;

--database 사용하기
USE shop;
```

### table 명령어
```sql
---table 만들기 명령어
CREATE TABLE `test`(
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY(`id`)
)  DEFAULT CHARSET=utf8;

--table 보기
SHOW TABLES;

CREATE TABLE `users` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(255) NOT NULL,
	`userid` VARCHAR(255) NOT NULL,
	`userpw` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
;


```