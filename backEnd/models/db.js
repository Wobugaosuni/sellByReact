// import mongoose from 'mongoose';
// import homeListSchema from '../schemas/homeList';
var mongoose = require('mongoose');
var homeListSchema = require('../schemas/homeList');
var loginSchema = require('../schemas/login');

// 定义模型
// homelist_collection 对应数据库中的表
var db = {
  HomeList: mongoose.model('homelist_collection', homeListSchema),
  Login: mongoose.model('login_collection', loginSchema)
};

// const db= {
//   User: mongoose.model('user_collection', userSchema)
// };

module.exports = db;
