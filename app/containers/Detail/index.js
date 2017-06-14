import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import getDetailDataActions from '../../fetch/detail/detail';
import './index.styl';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Detail">
        Detail
        {this.props.params.id}
      </div>
    );
  }

  componentDidMount() {
    let This = this;

    console.log('seller id', This.props.params.id);

    getDetailDataActions.getSellerInfo(
      This.props.params.id,
      (data) => {
        console.log('getSellerInfo success', data);
      }
    );
  }

}
