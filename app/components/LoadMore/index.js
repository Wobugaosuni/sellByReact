import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class LoadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:LoadMore" ref="loadMore">
        {
          this.props.isLoadingMore ?
          <span>加载中...</span> :
          <span
            className="load-more"
            onClick={this.onLoadingMoreClick.bind(this)}
          >
            加载更多
          </span>
        }
      </div>
    );
  }

  /**
   * 一. 监听下拉动作，自动加载更多
   * 1. 获取"加载更多"相对于视图顶部的位置
   * 2. 获取视图高度
   * 3. 当 1. 的高度小于 2. 的高度时，触发数据加载
   *
   * 二. 性能优化
   * 每次滚动时都触发视图高度计算，性能耗损严重 => 减少触发次数
   * 1. 如果有定时器，取消定时器
   * 2. 设置定时器
   */
  componentDidMount() {
    const loadMoreElement = this.refs.loadMore;
    let This = this;
    let timeoutId;

    window.addEventListener('scroll', () => {
      // 如果正处于加载中，退出监听
      if(This.props.isLoadingMore) {
        return;
      }

      console.log('scroll');

      // setTimeout 执行时会返回一个数字
      if(timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        let loadMoreElementTop = loadMoreElement.getBoundingClientRect().top;
        let windowHeight = window.screen.height;

        console.log('timeout');

        if (loadMoreElementTop && loadMoreElementTop < windowHeight) {
          This.props.loadMoreData();
        }
      }, 40);

      console.log('timeoutId', timeoutId);


    }, false);
  }

  onLoadingMoreClick() {
    // loading状态转换 + 加载下一页数据
    this.props.loadMoreData();
  }
}
