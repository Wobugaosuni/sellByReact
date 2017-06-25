import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:UserInfo">
        <p>
          <i className="icon-user"></i>
          &nbsp;
          <span>{this.props.userinfo.username}</span>
        </p>
        <p>
          <i className="icon-map-marker"></i>
          &nbsp;
          <span>{this.props.userinfo.cityName}</span>
        </p>
      </div>
    );
  }
}
