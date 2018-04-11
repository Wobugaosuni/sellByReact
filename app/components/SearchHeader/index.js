import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom';
// import { hashHistory } from 'react-router';

import './index.styl';
import SearchInput from '../SearchInput';

export default class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:SearchHeader">
        <Link to="/">
          <i onClick={this.onReturnHomeClick.bind(this)} className="icon-chevron-left"></i>
        </Link>
        <div className="header-search">
          <i className="icon-search"></i>
          <SearchInput
            searchValue={this.props.searchValue || ''}
            enterClick={this.onEnterClick.bind(this)}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
  }


  onReturnHomeClick() {
    // window.history.back();
    // hashHistory.push('/');
  }

  onEnterClick(newValue) {
    // hashHistory.push(`search/all/${encodeURIComponent(newValue)}`);
  }
}
