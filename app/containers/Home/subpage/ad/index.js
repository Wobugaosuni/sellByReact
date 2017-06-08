import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

import getHomeDataActions from '../../../../fetch/home/home';

export default class ad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        ad
      </div>
    );
  }

  componentDidMount() {
    let adData;

    getHomeDataActions.getHomeAd(json => {
      adData = json;
    });
  }
}
