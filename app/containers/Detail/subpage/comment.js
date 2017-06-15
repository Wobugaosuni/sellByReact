import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import LoadMore from '../../../components/LoadMore';
import CommentList from '../../../components/CommentList';
import getDetailDataActions from '../../../fetch/detail/detail';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      hasMore: false,
      commentData: [],
      isLoadingMore: false
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="containers:Comment">
        <h3 className="comment-title">用户点评</h3>
        <div className="full-line-divider"></div>
        {
          this.state.commentData.length ?
          <CommentList commentData={this.state.commentData} />:
          ''
        }
        {
          this.state.hasMore ?
          <LoadMore
            isLoadingMore={this.state.isLoadingMore}
            loadMoreData={this.loadMoreData.bind(this)}
          /> :
          ''
        }
      </div>
    );
  }

  componentDidMount() {
    this.getCommentData();
  }

  getCommentData() {
    let This = this;

    getDetailDataActions.getSellerComment(
      This.props.id,
      This.state.page,
      (json) => {
        This.setState({
          hasMore: json.hasMore,
          commentData: This.state.commentData.concat(json.data),
          page: This.state.page + 1,
          isLoadingMore: false
        });
        // console.log('getSellerComment success', json);
      }
    );
  }

  loadMoreData() {
    let This = this;

    this.setState({
      isLoadingMore: true
    });

    setTimeout(function() {
      This.getCommentData();
    }, 1000);
  }

}
