import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import Header from '../../components/Header';
import Info from './subpage/info';
import Comment from './subpage/comment';
import StoreAndBuy from './subpage/buy';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Detail">
        <Header title="商户详情" history={this.props.history} />
        <Info id={this.props.match.params.id} />
        <StoreAndBuy id={this.props.match.params.id} />
        <div className="gap-divider"></div>
        <Comment id={this.props.match.params.id} />
      </div>
    );
  }

  componentDidMount() {
    //
  }

}
