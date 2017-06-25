import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import OrderListItem from './item';

export default class SellerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentState: 2
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:OrderList">
        {
          this.props.orderList.map((item, index) => (
            <OrderListItem data={item} key={index} commentSubmit={this.props.commentSubmit} />
          ))
        }
      </div>
    );
  }

  componentDidMount() {
    //
  }
}
