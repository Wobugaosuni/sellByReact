import React from 'react';
// import './index.styl';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { withRouter } from 'react-router-dom';

// 引入本地存储相关
import { CITYNAME } from '../config/localStoreKey';
import localStore from '../util/localStore';

// Redux相关
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
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

    // 1. 从localStorerage获取当前城市
    let cityName = localStore.getItem(CITYNAME);

    if (cityName == null) {
      cityName = '北京';
    }

    // 2. 将城市信息存储到 Redux 中
    this.props.userInfoActions.update({
      cityName: cityName
    });

    // 模仿异步
    setTimeout(function() {
      This.setState({
        initDone: true
      });
    }, 50);
  }
}

/* eslint-disable */
const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

