import React from 'react';
import { Link } from 'react-router-dom';
// import { hashHistory } from 'react-router';

import './index.styl';
import SearchInput from '../SearchInput';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
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
          <SearchInput
            searchValue={this.state.searchValue}
            enterClick={this.onEnterClick.bind(this)}
          />
        </div>
        <div className="header-right">
          <Link to="/login">
            <i className="icon-user"></i>
          </Link>
        </div>
      </div>
    );
  }

  onEnterClick(newValue) {
    //  hashHistory.push(`search/all/${encodeURIComponent(newValue)}`);
  }
}
