import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.styl';
import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

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
        <Header title="登录" />
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
    } else {
      // 跳转到登录页面
      this.setState({
        checking: false
      });
    }
  }

  handleLogin(username) {
    // 同步到redux中
    let userinfo = this.props.userinfo;

    userinfo.username = username;
    this.props.userInfoActions.update(userinfo);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
