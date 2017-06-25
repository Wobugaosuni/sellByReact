import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import getUserDataActions from '../../../fetch/user/user';
import OrderListComponent from '../../../components/OrderList';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: []
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="container:OrderList">
        <h3>您的订单</h3>
        {
          this.state.orderList.length ?
          <OrderListComponent commentSubmit={this.commentSubmit.bind(this)} orderList={this.state.orderList} /> :
          '加载中'
        }
      </div>
    );
  }

  componentDidMount() {
    let This = this;

    // 获取订单列表
    getUserDataActions.getUserOrderList(
      This.props.username,
      data => {
        This.setState({
          orderList: data
        });
      }
    );
  }

  commentSubmit(id, value, updateState) {
    // 提交评价
    getUserDataActions.postComment(
      id,
      value,
      data => {
        if (!data.errorNumber) {
          updateState();
        }
      }
    );
  }

}
