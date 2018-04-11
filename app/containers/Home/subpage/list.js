import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.styl';
import SellerList from '../../../components/SellerList';
import LoadMore from '../../../components/LoadMore';

import getHomeDataActions from '../../../fetch/home/home';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],  // 存储列表信息
      hasMore: false,  // 记录当前状态下，是否有更多的数据可供加载。后端提供 ！
      isLoadingMore: false,  // 记录当前状态下，是”点击加载更多“，还是”加载中……“
      page: 0  // 记录下一页的页面，首页是0
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="subpage:list">
        <h3 className="list-title">猜你喜欢</h3>
        {
          this.state.listData.length ?
          <SellerList listData={this.state.listData} /> :
          ''
        }
        {
          this.state.hasMore ?
          <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreData={this.loadMoreData.bind(this)} /> :
          ''
        }
      </div>
    );
  }

  componentDidMount() {
    // 获取首屏数据
    this.getHomeListData();
  }

  getHomeListData() {
    let This = this;

    getHomeDataActions.getHomeList(
      This.props.cityName,
      This.state.page,
      (json) => {
        let hasMore = json.hasMore;
        let listData = json.data;

        This.setState({
          hasMore,
          listData: This.state.listData.concat(listData),
          page: This.state.page + 1,
          isLoadingMore: false
        });
      }
    );
  }

  // "加载更多"
  loadMoreData() {
    let This = this;

    // 加载状态转换
    This.setState({
      isLoadingMore: true
    });

    // 加载下一屏数据
    This.getHomeListData();
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.userinfo.cityName
  };
};

/* eslint-disable */
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(List));

