import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
// import { hashHistory } from 'react-router';

import './index.styl';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div role="component:Header">
        <i onClick={this.onReturnHomeClick.bind(this)} className="icon-chevron-left"></i>
        <h3>{this.props.title}</h3>
      </div>
    );
  }

  onReturnHomeClick() {
    // console.log('this.props:', this.props);
    this.props.history.goBack();
    // hashHistory.push('/');
  }
}
