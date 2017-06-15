import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import getDetailDataActions from '../../../fetch/detail/detail';
import './index.styl';
import DetailInfo from '../../../components/DetailInfo';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerInfo: false
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div>
        {
          this.state.sellerInfo ?
          <DetailInfo
            sellerId={this.props.id}
            sellerInfo={this.state.sellerInfo}
          /> :
          ''
        }
      </div>
    );
  }

  componentDidMount() {
    let This = this;

    // console.log('seller id:', This.props.id);

    getDetailDataActions.getSellerInfo(
      This.props.id,

      (json) => {
        This.setState({
          sellerInfo: json
        });
        // console.log('getSellerInfo success', json);
      }
    );
  }

}
