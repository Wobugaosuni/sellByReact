import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class HomeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:HomeList">
        {
          this.props.listData.map((item, index) => {
            return (
              <div key={index}>
                <div className="list-item">
                  <img width="115" height="90" src={item.img} />
                  <div className="item-right">
                    <div className="right-top">
                      <div className="item-line-one">
                        <span>{item.title}</span>
                        <span>{item.distance}</span>
                      </div>
                      <div className="item-line-two">
                        <span>{item.subTitle}</span>
                      </div>
                    </div>
                    <div className="right-bottom">
                      <span className="goods-price">￥{item.price}</span>
                      <span>已售{item.number}</span>
                    </div>
                  </div>
                </div>
                <div className="line-divider"></div>
              </div>
            );
          })
        }
      </div>
    );
  }

  componentDidMount() {
    console.log('props', this.props.listData);
  }
}
