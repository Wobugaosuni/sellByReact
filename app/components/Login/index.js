import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:Login">
        <div className="input-container phone-container">
          <i className="icon-tablet"></i>
          <input
            type="text"
            placeholder="输入手机号"
            value={this.state.username}
            onChange={this.onInputChange.bind(this)}
          />
        </div>
        <div className="input-container password-container">
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input
            type="text"
            placeholder="输入验证码"
            onChange={this.onPasswordChange.bind(this)}
          />
        </div>
        <button className="btn-login" onClick={this.onLoginClick.bind(this)}>登录</button>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  onLoginClick() {
    this.props.handleLogin(this.state.username, this.state.password);
  }
}
