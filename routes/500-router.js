module.exports = (err, req, res, next) => {
	// 모든 에러의 종착점
  console.log('=======error=======');
	res.json({ code: err.status, message: err.message });
	res.render('error/error',{ code: err.status, message: err.message });
};
