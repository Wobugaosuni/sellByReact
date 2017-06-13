import React from 'react';

import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="component:CurrentCity">
        <h2>{this.props.cityName}</h2>
      </div>
    );
  }
}
