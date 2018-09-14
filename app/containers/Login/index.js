import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
// import { hashHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.styl';
import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import userActions from '../../fetch/user/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: true
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div>
        <Header title="登录" history={this.props.history} />
        {
          this.state.checking ?
          <div>{ /* 等待中 */ }</div> :
          <LoginComponent handleLogin={this.handleLogin.bind(this)} />
        }
      </div>
    );
  }

  componentDidMount() {
    // 检查是否已经登录，是否有username
    if (this.props.userinfo.username) {
      // 跳转到相应页面
      // hashHistory.push('/user');
    } else {
      // 跳转到登录页面
      this.setState({
        checking: false
      });
    }
  }

  handleLogin(username, password) {
    // 同步到redux中
    let userinfo = this.props.userinfo;
    const params = this.props.match.params;

    userinfo.username = username;
    this.props.userInfoActions.update(userinfo);

    console.log('this.props:', this.props);

    userActions.postUserInfo(username, password, json => {
      //
    });

    // 判断url中是否携带参数
    // 1. 携带

    // if (params.router != null) {
    //   this.props.history.push('/' + decodeURIComponent(params.router));
    // } else {
    //   this.props.history.push('/user');
    // }
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
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
