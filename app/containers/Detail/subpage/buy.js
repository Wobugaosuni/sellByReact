import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';

import './index.styl';
import StoreAndBuyComponent from '../../../components/StoreAndBuy';

import { connect } from 'react-redux';

class StoreAndBuy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div>
        <StoreAndBuyComponent
          storeHandle={this.storeHandle.bind(this)}
          buyHandle={this.buyHandle.bind(this)} />
      </div>
    );
  }

  storeHandle() {
    // 1. 检查是否登录
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
}

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo
  };
};

/* eslint-disable */
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreAndBuy);
