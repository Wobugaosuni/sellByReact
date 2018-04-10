import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'normalize.css';
import './common/stylus/index.styl'; // 引入公共样式

// import { getData, postData } from './fetch/data';
import RouterMap from './router/router';
// import { hashHistory } from 'react-router';

// 性能检测
import Perf from 'react-addons-perf';

/* eslint-disable no-undef */
if (__DEV__) {
  /* eslint-disable semi */
  window.Perf = Perf
}

// 创建 Redux 的 store 对象
const store = configureStore();

// fetch请求
// getData();
// postData();

render (
  <Provider store={store}>
    <RouterMap />
  </Provider>,
  document.getElementById('root')
);
