import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
// import { hashHistory } from 'react-router';

import './index.styl';
import StoreAndBuyComponent from '../../../components/StoreAndBuy';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActionsFromFile from '../../../actions/store';

class StoreAndBuy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStore: false
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div>
        <StoreAndBuyComponent
          isStore={this.state.isStore}
          storeHandle={this.storeHandle.bind(this)}
          buyHandle={this.buyHandle.bind(this)} />
      </div>
    );
  }

  componentDidMount() {
    this.checkStoreState();
  }

  // 检查商户是否已经收藏
  checkStoreState() {
    const store = this.props.store;
    const id = this.props.id;
    let This = this;

    store.some(item => {
      if (item.id === id) {
        // 已经在收藏列表
        This.setState({
          isStore: true
        });
        return true;
      }
    });
  }

  // 检查是否已经登录
  loginCheck() {
    const userinfo = this.props.userinfo;
    const id = this.props.id;

    if (!userinfo.username) {
      // 如果没有登录，跳转到登录页，并在url中携带参数——商户id，以便登录后直接跳转到商户详情页
      // hashHistory.push(`login/${encodeURIComponent(`/detail/${id}`)}`);

      return false;

    } else {
      return true;
    }
  }

  storeHandle() {
    let This = this;
    const id = this.props.id;

    // 1. 检查是否登录
    const isLogin = this.loginCheck();
    if (!isLogin) {
      return;
    }

    // 2. 收藏或取消收藏
    if (this.state.isStore) {
      // 已经被收藏了，则取消收藏
      this.props.storeActions.remove({id});
    } else {
      // 未收藏，则添加到收藏中
      this.props.storeActions.add({id});
    }

    this.setState({
      isStore: !This.state.isStore
    });
  }

  buyHandle() {
    // 1. 检查是否登录
    const isLogin = this.loginCheck();
    if (!isLogin) {
      return;
    }

    // 2. 购买流程

    // 3. 跳转
    // hashHistory.push('user');

  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo,
    store: state.store
  };
};

/* eslint-disable */
const mapDispatchToProps = dispatch => {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreAndBuy);
