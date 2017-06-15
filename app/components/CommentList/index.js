import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import Star from '../star';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div role="component:CommentList">
        {
          this.props.commentData.map((item, index) => {
            return (
              <div className="comment-wrapper" key={index}>
                <div className="item-content">
                  <div className="user-content">
                    <i className="icon-user"></i>
                    <span>{item.username}</span>
                  </div>
                  <Star star={item.star} />
                  <p className="comment-content">{item.comment}</p>
                </div>
                <div className="full-line-divider"></div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
