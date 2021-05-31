const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
console.log( path.join(__dirname, './public'));

/*****************server start***************** */
app.listen(3000, () => {console.log('http://127.0.0.1:3000')});

/*****************router***************** */
// app.get('/', (req,res,next) => {
//   res.send('<h1>ROOT</h1>');
// })
// app.get('/1', (req,res,next) => {
//   res.send('<h1>1번</h1>');
// })

/* app.use(GET/POST 가리지 않고 다 받음***************** */
  app.use('/',express.static( path.join(__dirname, './public'))) //루트로 들어오면 public으로 보내줌 (정적 라우터)

  app.get('/product', (req,res,next) =>{
    //가상으로 데이터베이스에서 상품정보를 가져왔음 -우리가 코딩할 내용
    const products =[
      {id: 1, title: '상품1', price: '20000원'},
      {id: 2, title: '상품2', price: '20300원'},
      {id: 3, title: '상품3', price: '20400원'},
      {id: 4, title: '상품4', price: '20500원'}
    ]
    let html =`
    <!doctype html>
    <html lang="ko">
      <head>
        <meta charset="utf-8">
        <title>상품정보</title>
        </head>
        <body>
          <h1>우리회사 상품: ${products.length}개</h1>
          <ul>`;
        for(let v of products){
          html += `<li>${v.id} | ${v.title} | ${v.price}</li>`;
        }
    html +=`
          </ul>
        </body>
      </html>`;
      res.send(html);
  });
