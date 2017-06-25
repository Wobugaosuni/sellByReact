import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class SellerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:OrderList">
        {
          this.props.orderList.map((item, index) => (
            <div className="order-list-item" key={index}>
              <div className="item-left">
                <div className="item-image">
                  <img src={item.img} />
                </div>
                <div className="item-content">
                  <span>商户：{item.title}</span>
                  <span>数量：{item.count}</span>
                  <span>价格：￥{item.price}</span>
                </div>
              </div>
              <div className="item-comment">
                <button>评价</button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }

  componentDidMount() {
    // console.log('props', this.props.listData);
  }
}
