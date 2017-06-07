import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:HomeHeader">
        <div className="header-left">
          <span>{this.props.cityName}</span>
          <i className="icon-angle-down"></i>
        </div>
        <div className="header-center">
          <i className="icon-search"></i>
          <input />
        </div>
        <div className="header-right">
          <i className="icon-user"></i>
        </div>
      </div>
    );
  }
}
