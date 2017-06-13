import React from 'react';
import { Link, hashHistory } from 'react-router';

import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '请搜索'
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:HomeHeader">
        <div className="header-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="header-center">
          <i className="icon-search"></i>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.onInputChange.bind(this)}
            onKeyUp={this.onInputKeyUp.bind(this)}
          />
        </div>
        <div className="header-right">
          <i className="icon-user"></i>
        </div>
      </div>
    );
  }

  onInputChange(event) {
    let This = this;

    This.setState({
      searchValue: event.target.value
    });
  }

  onInputKeyUp(event) {
    let This = this;

    if (event.keyCode !== 13) {
      return;
    }

    hashHistory.push(`search/all/${encodeURIComponent(This.state.searchValue)}`);
  }
}
