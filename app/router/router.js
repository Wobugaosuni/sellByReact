import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers';
import City from '../containers/City';
import Detail from '../containers/Detail';
import Home from '../containers/Home';
import Search from '../containers/Search';
import User from '../containers/User';
import Login from '../containers/Login';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>

        { /* 入口页面，父页面 */ }
        <Route path="/" component={App}>

          { /* 入口页面，默认跳转 */ }
          <IndexRoute component={Home}></IndexRoute>

          { /* 城市页 */ }
          <Route path="/city" component={City}></Route>

          { /* 搜索页，接收一个必需参数，一个可选参数 */ }
          <Route path="/search/:category(/:keywords)" component={Search}></Route>

          { /* 用户页面，不能在url里设置参数，否则易被黑客抓取信息。可以通过内存存取参数 */ }
          <Route path="/user" component={User}></Route>

          { /* 商品详情页 */ }
          <Route path="/detail/:id" component={Detail}></Route>

          { /* 登录页，及登录后可以跳转的参数路由设置 */ }
          <Route path="/login(/:router)" component={Login}></Route>

        </Route>

      </Router>
    );
  }
}
