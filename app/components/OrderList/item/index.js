import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class SellerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentState: 2
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const data = this.props.data;

    return (
      <div role="component:OrderListItem">
        <div className="order-list-item">
          <div className="item-left">
            <div className="item-image">
              <img src={data.img} />
            </div>
            <div className="item-content">
              <span>商户：{data.title}</span>
              <span>数量：{data.count}</span>
              <span>价格：￥{data.price}</span>
            </div>
          </div>
          <div className="item-comment">
            {
              this.state.commentState === 0
              ? <button className="normal-button comment-button" onClick={this.showCommentEdit.bind(this)}>评价</button>
              :
                this.state.commentState === 1
                ? ''
                : <button className="normal-button">已评价</button>
            }
          </div>
        </div>
        {
          this.state.commentState === 1 ?
          <div className="comment-edit">
            <textarea className="commit-content" />
            <button className="normal-button comment-button">提交</button>
            <button className="normal-button" onClick={this.cancelCommit.bind(this)}>取消</button>
          </div> :
          ''
        }
      </div>
    );
  }

  componentDidMount() {
    const data = this.props.data;

    this.setState({
      commentState: data.commentState
    });
  }

  showCommentEdit() {
    this.setState({
      commentState: 1
    });
  }

  cancelCommit() {
    this.setState({
      commentState: 0
    });
  }
}
