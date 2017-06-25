import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import './index.styl';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/orderList';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    const userinfo = this.props.userinfo;

    return (
      <div role="containers:User">
        <Header title="用户中心" />
        <UserInfo userinfo={userinfo} />
        <OrderList username={userinfo.username} />
      </div>
    );
  }

  componentDidMount() {
    // 进入用户中心页前，先判断用户是否登录
    if (!this.props.userinfo.username) {
      hashHistory.push('/login');
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
)(User);
