import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './common/stylus/index.styl'; // 引入公共样式

// import { getData, postData } from './fetch/data';
import RouterMap from './router/router';
import { hashHistory } from 'react-router';

// 性能检测
import Perf from 'react-addons-perf';

/* eslint-disable no-undef */
if (__DEV__) {
  /* eslint-disable semi */
  window.Perf = Perf
}

// fetch请求
// getData();
// postData();

render (
  <RouterMap history={hashHistory} />,
  document.getElementById('root')
);
