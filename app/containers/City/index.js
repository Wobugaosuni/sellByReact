import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

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
        <Header title="选择城市" />
        <CurrentCity cityName={this.props.cityName} />
        <CityList currentCityChange={this.onCurrentCityChange.bind(this)} />
      </div>
    );
  }

  onCurrentCityChange(newCity) {
    // 1. 同步redux
    this.props.userInfoActions.update({
      cityName: newCity
    });

    // 2. 同步localStorage
    localStore.setItem(CITYNAME, newCity);

    // 3. 返回首页
    window.history.back();
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.userinfo.cityName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
