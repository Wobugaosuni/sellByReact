import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

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
    window.history.back();
  }
}
