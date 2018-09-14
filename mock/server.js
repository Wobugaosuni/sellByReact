/*
 * mocks数据(模拟后台数据)
 * 读取data.json的数据
 * 利用 Koa 框架编写接口请求
 */

var koa = require('koa');
var router = require('koa-router');
var koaBody = require('koa-body')();

var mongoose = require('mongoose')

// mongoose.Promise = global.Promise;

// 连接本地数据库
mongoose.connect('mongodb://localhost/sellByReact')

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
  console.log('数据库连接成功');
});

/**
* 连接异常
*/
mongoose.connection.on('error',function (err) {
  console.log('数据库连接出现错误，错误为：'+ err);
});

/**
* 连接断开
*/
mongoose.connection.on('disconnected', function () {
  console.log('数据库连接断开');
});

// 把 HomeList 模型加载进来
var db = require('../backEnd/models/homeList')

const userobj={
	user: 'hello world',
}
// new db.HomeList(userobj).save(function(error){
// 	if (error) {
//     // res.status(500).send()
//     console.log('save user info error:', error);
// 		return
//   }
//   console.log('save data success');
// 	// res.json({statu: 200})
// })

// db.User.find({}, function(err, docs){
// 	if (err) {
// 			console.log('出错'+ err);
// 			return;
//   }
//   console.log('docs:', docs)
// 	// res.json(docs); // 以json格式输出
// });



var app = new koa();
var koaRouter = new router();

// 1. 拿到data，定义对应变量
var homeAdData = require('../data/home/ad');
var homeListData = require('../data/home/list');
var searchListData = require('../data/search/list');
var sellerInfo = require('../data/detail/info');
var sellerComment = require('../data/detail/comment');
var orderList = require('../data/user/orderList');

// 2. 编写路由
// 首页 —— 广告（超值特惠）
koaRouter.get('/api/homead', function (ctx, next) {
  ctx.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
koaRouter.get('/api/homelist/:city/:page', async (ctx, next) => {
  console.log('homelist.params', ctx.params);
  // mock数据
  // ctx.body = homeListData;

  // 从数据库里拿到数据
  // const data = await HomeList.fetch((err, data) => {
  //   if (err) console.log('fetch homeList error:', err);

  //   console.log('fetch homeList success:', data)
  //   return data
  // })

  const page = + ctx.params.page
  let hasMore = false

  const list = await db.HomeList.find()
  const count = await db.HomeList.find().count()

  // console.log('get list success:', list)
  console.log('list count:', count);

  // 每次查询5条数据
  if (count > page * 5) {
    hasMore = true
  } else {
    hasMore = false
  }

  console.log('hasMore:', hasMore);

  ctx.body = {
    hasMore,
    data: list.slice(0, 5),
  }
  // console.log('ctx:', ctx.res);
});

// 搜索页 —— 搜索结果列表(首页点击类目，三个参数)
koaRouter.get('/api/searchlist/:city/:page/:category', function (ctx, next) {
  console.log('searchlist.params', ctx.params);

  ctx.body = searchListData;
});

// 搜索页 —— 搜索结果列表(输入搜索，四个参数)
koaRouter.get('/api/searchlist/:city/:page/:category/:keywords', function (ctx, next) {
  console.log('searchlist.params', ctx.params);

  ctx.body = searchListData;
});

// 商户详情页
koaRouter.get('/api/sellerinfo/:id', function (ctx, next) {
  console.log('sellerinfo/:id', ctx.params);

  ctx.body = sellerInfo;
});

// 商户评论列表
koaRouter.get('/api/sellercomment/:id/:page', function (ctx, next) {
  console.log('sellercomment/:id/:page', ctx.params);

  ctx.body = sellerComment;
});

// 用户订单列表
koaRouter.get('/api/orderlist/:username', function (ctx, next) {
  console.log('orderlist/:username', ctx.params);

  ctx.body = orderList;
});

// 提交评论
koaRouter.post('/api/submitcomment', function (ctx, next) {

  ctx.body = {
    errorNumber: 0,
    message: 'comment submit success'
  };
});

// 登录
koaRouter.post('/api/postUserInfo', function (ctx, next) {
  console.log('postUserInfo', ctx.params);

  ctx.body = {
    errorNumber: 0,
    message: 'postUserInfo success'
  };
});

// koaRouter.get('/', function (ctx, next) {
//   ctx.body = 'hello koa';
// });

// koaRouter.get('/api', function (ctx, next) {
//   ctx.body = testData;
// });

// koaRouter.get('/api/get', function (ctx, next) {
//   ctx.body = testData.goods;
// });

// koaRouter.post('/api/post', koaBody, function (ctx) {
//   ctx.body = JSON.stringify(ctx.request.body);
// });


// 3. 使用路由
app.use(koaRouter.routes())
   .use(koaRouter.allowedMethods());

// 4. 监听端口
app.listen(2999);

// 5. 执行`npm run mock`，然后在浏览器测试
