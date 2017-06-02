import React from 'react';
// import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <div>header</div>
        {this.props.children}
      </div>
    );
  }
}
