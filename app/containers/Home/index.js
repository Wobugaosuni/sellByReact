import React from 'react';
import './index.styl';
import HomeHeader from '../../components/HomeHeader';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Home">
        <HomeHeader />
      </div>
    );
  }
}
