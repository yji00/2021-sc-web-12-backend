
const express = require('express'); // 함수단위로 옴
const app = express();

/******************서버구동****************** */
app.listen(3000, () => {console.log('http://127.0.0.1:3000') });

/******************라우터(Router)****************** */
//http://127.0.0.1:3000
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
});
//http://127.0.0.1:3000/hello
app.get('/hello', (req, res, next) => {
  res.send('<h1>Hello User!</h1>');
});
//http://127.0.0.1:3000/login?name=이름
app.get('/login', (req, res, next) => {
  let loginUser = req.query.name;
  res.send(`<h1>Hello ${loginUser}!</h1>`);
});
//http://127.0.0.1:3000/sign/이름
app.get('/sign/:name', (req, res, next) => {
  let loginUser = req.params.name;
  res.send(`<h1>Hello ${loginUser}!</h1>`);
});
//http://127.0.0.1:3000/data/2.5/weather?appid=avc&units=metric&lat=37.25&lon=127.35
app.get('/data/2.5/weather', (req, res, next) => {
  // let appid = req.query.appid;
  // let units =req.query.units;
  // let lat = req.query.lat;
  // let lon = req.query.lon;
  let { appid, units, lat, lon} = req.query;
  //res.send(`<h1>Hello ${appid} /${units} /${lat} /${lon} </h1>`);
  res.json({
    city: 'seoul',
    lat,
    lon,
    dt: new Date().getTime(),
    main: {
      temp: 18.83,
      feels: 17.32
    },
    weather: [
      {
        main: 'rain',
      description: 'scatter rain'
    }
    ]
  })
});

