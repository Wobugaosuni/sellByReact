import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import './index.styl';
import HomeList from '../../../components/HomeList';
import getHomeDataActions from '../../../fetch/home/home';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      hasMore: false
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="subpage:list">
        <h3 className="list-title">猜你喜欢</h3>
        {
          this.state.listData.length ?
          <HomeList listData={this.state.listData} /> :
          ''
        }
      </div>
    );
  }

  componentDidMount() {
    let This = this;

    // 获取首屏数据
    getHomeDataActions.getHomeList(
      encodeURIComponent(This.props.cityName),
      0,
      (json) => {
        let hasMore = json.hasMore;
        let listData = json.data;

        This.setState({
          hasMore,
          listData
        });
      }
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
)(List);

