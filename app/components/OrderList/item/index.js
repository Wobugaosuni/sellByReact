import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';
import Star from '../../../components/Star';

export default class SellerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentState: 2,
      score: 0
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
            <textarea ref="commentContent" className="commit-content" />
            <Star
              star={this.state.score}
              starClick={this.starClick.bind(this)}
              edit="true" />
            <div className="button-wrapper">
              <button className="normal-button comment-button" onClick={this.commentSubmit.bind(this)}>提交</button>
              <button className="normal-button" onClick={this.cancelCommit.bind(this)}>取消</button>
            </div>
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

  // 星星被点击时的回调
  starClick (score) {
    this.setState({
      score
    });
  }

  commentSubmit() {
    const This = this;
    const id = this.props.data.id;
    const value = this.classNames.commentContent.value.trim();
    const star = this.state.score;

    // 触发父父组件提交评论的函数
    this.props.commentSubmit(
      id,
      value,
      star,
      () => {
        This.setState({
          commentState: 2
        });
      }
    );
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
