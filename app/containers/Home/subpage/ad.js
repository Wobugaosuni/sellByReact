import React from 'react';
import './index.styl';

import HomeAd from '../../../components/HomeAd';

import PureReanderMixin from 'react-addons-pure-render-mixin';

import getHomeDataActions from '../../../fetch/home/home';

export default class Ad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeAdData:[]
    };

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        {
          this.state.homeAdData.length ?
          <HomeAd homeAdData={this.state.homeAdData} /> :
          ''
        }

      </div>
    );
  }

  componentDidMount() {
    let This = this;

    // 获取广告数据
    getHomeDataActions.getHomeAd(json => {
      console.log('get homeAdData success', json);

      if (json.length) {
        This.setState({
          homeAdData: json
        });
      }
    });
  }
}
