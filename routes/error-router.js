module.exports = (error) =>{
const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    res.render('경로를 찾을 수 없습니다.');
  });
  return router

};