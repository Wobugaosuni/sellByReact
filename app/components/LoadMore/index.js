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

  componentDidMount() {
    const loadMoreElement = this.refs.loadMore;
    let This = this;
    // console.log('loadMoreElement', loadMoreElement);

    // 监听下拉动作
    addEventListener('scroll', () => {

      // 获取"加载更多"相对于视图顶部的位置
      let loadMoreElementTop = loadMoreElement.getBoundingClientRect().top;

      let windowHeight = window.screen.height;

      if (loadMoreElementTop < windowHeight) {
        This.props.loadMoreData();
      }

    }, false);
  }

  onLoadingMoreClick() {
    // loading状态转换 + 加载下一页数据
    this.props.loadMoreData();
  }
}
