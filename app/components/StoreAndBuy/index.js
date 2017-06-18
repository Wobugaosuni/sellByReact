import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class StoreAndBuy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStore: false
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div role="component:StoreAndBuy">
        <div className="store-container">
          {
            this.state.isStore ?
            <button>已收藏</button> :
            <button>收藏</button>
          }
        </div>
        <div className="buy-container">
          <button onClick={this.onBuyClick.bind(this)}>购买</button>
        </div>
      </div>
    );
  }

  onBuyClick() {
    this.props.buyHandle();
  }
}
