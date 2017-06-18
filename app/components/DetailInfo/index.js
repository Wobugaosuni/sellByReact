import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import Star from '../../components/Star';

export default class DetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let sellerInfo = this.props.sellerInfo;

    return (
      <div role="component:DetailInfo">
        <div className="info-container">
          <div className="img-wrapper">
            <img src={sellerInfo.img} />
          </div>
          <div className="info-content">
            <h3>
              {this.props.sellerId.slice(12)}
              {sellerInfo.title}
            </h3>
            <div className="score-price">
              <Star star={sellerInfo.star} />
              <span className="price-content">￥{sellerInfo.price}</span>
            </div>
            <p>
              {sellerInfo.subTitle}
            </p>
          </div>
        </div>
        <div className="gap-divider"></div>
        <p
          className="seller-desc"
          dangerouslySetInnerHTML={{__html: sellerInfo.desc}}
        ></p>
      </div>
    );
  }
}
