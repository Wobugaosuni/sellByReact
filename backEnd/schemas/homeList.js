// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 定义模式
var homeListSchema = new Schema({
  // data: Array,
  // id: Number,
  img: String,
  title: String,
  subTitle: String,
  price: String,
  distance: String,
  number: String,
  meta: {
    // 定义创建时间
    createAt: {
      type: Number,
      default: Date.now()
    },
    // 定义更新时间
    updateAt: {
      type: Number,
      default: Date.now()
    }
  }
});

// 触发 save 之前的钩子，更新时间
homeListSchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now;
  } else {
    this.meta.updateAt = Date.now;
  }

  next();
});

// 定义静态方法
// 返回全部数据
homeListSchema.static('fetch', function (cb) {
  return this
  .find()
  // .sort('meta.updateAt')  // 升序
  .exec(cb);
});

// 返回一条数据
homeListSchema.static('findById', (id, cb) => {
  return this.findOne({
    _id: id
  }, cb);
});

// //  用户对象模型
// const userSchema = new Schema({
//   user: String,
// });

module.exports = homeListSchema;
