// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 定义模式
var loginSchema = new Schema({
  username: String,
  password: String,
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
// loginSchema.pre('save', next => {
//   if (this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now;
//   } else {
//     this.meta.updateAt = Date.now;
//   }

//   next();
// });

// 返回一条数据
loginSchema.static('findById', (id, cb) => {
  return this.findOne({
    _id: id
  }, cb);
});

// //  用户对象模型
// const userSchema = new Schema({
//   user: String,
// });

module.exports = loginSchema;
