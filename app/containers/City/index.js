import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { withRouter } from 'react-router-dom';
// import { hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

import { CITYNAME } from '../../config/localStoreKey';
import localStore from '../../util/localStore';

import './index.styl';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:City">
        <Header title="选择城市" history={this.props.history} />
        <CurrentCity cityName={this.props.cityName} />
        <CityList currentCityChange={this.onCurrentCityChange.bind(this)} />
      </div>
    );
  }

  onCurrentCityChange(newCity) {
    // 1. 同步redux
    let userinfo = this.props.userinfo;

    userinfo.cityName = newCity;

    this.props.userInfoActions.update(userinfo);

    // 2. 同步localStorage
    localStore.setItem(CITYNAME, newCity);


    // 3. 返回首页
    console.log('this.props:', this.props);
    this.props.history.goBack();
    // window.history.back();
    // console.log('hashHistory', hashHistory);
    // hashHistory.push('/');

  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo
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
)(City));
