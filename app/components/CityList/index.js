import React from 'react';
import './index.styl';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const list = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安'];

    return (
      <div role="component:CityList">
        <h3>热门城市</h3>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} className="city-item">
                  <span onClick={this.props.currentCityChange.bind(this, item)}>
                    {item}
                  </span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
