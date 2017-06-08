import React from 'react';
import './index.styl';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import HomeAd from './subpage/ad';

import PureReanderMixin from 'react-addons-pure-render-mixin';

import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Home">
        <HomeHeader cityName={this.props.cityName} />
        <Category />
        <HomeAd />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.userinfo.cityName
  };
};

/* eslint-disable */
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
