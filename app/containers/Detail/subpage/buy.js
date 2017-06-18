import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';

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
    // console.log('data', this.props.store);
    // console.log('method', this.props.storeActions);
  }

  loginCheck() {
    const userinfo = this.props.userinfo;
    const id = this.props.id;

    if (!userinfo.username) {
      // 如果没有登录，跳转到登录页，并在url中携带参数——商户id，以便登录后直接跳转到商户详情页
      hashHistory.push(`login/${encodeURIComponent(`/detail/${id}`)}`);

      return false;

    } else {
      return true;
    }
  }

  storeHandle() {
    let This = this;

    // 1. 检查是否登录
    const isLogin = this.loginCheck();

    if (!isLogin) {
      return;
    }

    // 2. 收藏或取消收藏
    const store = this.props.store;
    const id = this.props.id;

    if (!store.length) {
      This.props.storeActions.add({
        id: id
      });
    } else {
      store.some(item => {
        if (item.id === id) {
          // 已经在收藏列表，现在需要取消收藏
          This.props.storeActions.remove({
            id: id
          });
        } else {

          // 不在收藏列表，现在需要增加收藏
          This.props.storeActions.add({
            id: id
          });
        }
      });

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

    hashHistory.push('user');

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
