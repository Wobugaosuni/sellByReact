import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class HomeAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:HomeAd">
        <h3 className="ad-title">超值特惠</h3>
        <div className="line-divider"></div>
        <div className="ad-container">
          {
            this.props.homeAdData.map((item, index) => {
              return (
                <div key={index} className="ad-item">
                  <i className="ad-img" style={{backgroundImage: `url(${item.img})`}}></i>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log('props', this.props.homeAdData);
  }
}
