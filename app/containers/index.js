import React from 'react';
// import './index.styl';
import PureReanderMixin from 'react-addons-pure-render-mixin';

// 引入本地存储相关
import { CITYNAME } from '../config/localStoreKey';
import localStore from '../util/localStore';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initDone: false
    };

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        {
          this.state.initDone ?
          this.props.children :
          <div>Loading...</div>
        }
      </div>
    );
  }

  componentDidMount () {
    let This = this;

    // 模仿异步
    setTimeout(function() {
      This.setState({
        initDone: true
      });
    }, 1000);

    // 获取当前城市
    let cityName = localStore.getItem(CITYNAME);

    if (cityName == null) {
      cityName = '北京';
    }
  }
}
