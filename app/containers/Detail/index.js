import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import Header from '../../components/Header';
import Info from './subpage/info';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Detail">
        <Header title="商户详情" />
        <Info id={this.props.params.id} />
      </div>
    );
  }

  componentDidMount() {
    //
  }

}
