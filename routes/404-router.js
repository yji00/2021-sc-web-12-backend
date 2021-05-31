const express =require('express');
const router = express.Router();
const error = require('http-errors');

router.use((req, res, next) => {
	// 경로를 못찾으면 도착
	next(error(404, '요청하신 페이지를 찾을 수 없습니다.'));
});

module.exports = router;