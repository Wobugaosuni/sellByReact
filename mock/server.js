/*
 * mocks数据(模拟后台数据)
 * 读取data.json的数据
 * 利用 Koa 框架编写接口请求
 */

var koa = require('koa');
var router = require('koa-router');
var koaBody = require('koa-body')();

var app = new koa();
var koaRouter = new router();

// 1. 拿到data，定义对应变量
var testData = require('../data/data.json');
var homeAdData = require('../data/home/ad');

// 2. 编写路由
koaRouter.get('/', function (ctx, next) {
  ctx.body = 'hello koa';
});

koaRouter.get('/api', function (ctx, next) {
  ctx.body = testData;
});

koaRouter.get('/api/get', function (ctx, next) {
  ctx.body = testData.goods;
});

koaRouter.get('/api/homead', function (ctx, next) {
  ctx.body = homeAdData;
});

koaRouter.post('/api/post', koaBody, function (ctx) {
  ctx.body = JSON.stringify(ctx.request.body);
});


// 3. 使用路由
app.use(koaRouter.routes())
   .use(koaRouter.allowedMethods());

// 4. 监听端口
app.listen(3000);

// 5. 执行`npm run mock`，然后在浏览器测试
