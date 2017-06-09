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
      <div role="component:LoadMore">
        {
          this.props.isLoadingMore ?
          <span>加载中...</span> :
          <span className="load-more" onClick={this.onLoadingMoreClick.bind(this)}>加载更多</span>
        }
      </div>
    );
  }

  onLoadingMoreClick() {
    // loading状态转换 + 加载下一页数据
    this.props.loadMoreData();
  }
}
