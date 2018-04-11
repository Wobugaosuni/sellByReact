import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router-dom';

import './index.styl';

// 使用 React 轮播插件
import ReactSwipe from 'react-swipe';
import swipeData from '../../../data/swipeData.json';

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swipeIndex: 0
    };

    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let This = this;

    let swipeOptions = {
      auto: 2000,
      callback: function (index, element) {
        This.setState({
          swipeIndex: index
        });
       }
    };

    return (
      <div role="component:Category">
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
          {
            swipeData.data.map((item, index) => {
              return (
                <div key={index} className="pane-wrapper">
                  <ul>
                    {
                      item.pane ? item.pane.map((category, categoryIndex) => {
                        return (
                          <Link key={categoryIndex} to={`/search/${category.category}`}>
                            <li className="pane-item">
                              <span className="pane-icon" style={{backgroundImage: `url(${category.url})`}}></span>
                              <span className="pane-text">{category.text}</span>
                            </li>
                          </Link>
                        );
                      }) : ''
                    }
                  </ul>
                </div>
              );
            })
          }
        </ReactSwipe>
        <div className="dot-wrapper">
          {
            swipeData.data.map((item, index) => {
              return (
                <i key={index} className={this.state.swipeIndex === index ? 'dot-selected dot-item' : 'dot-item'}></i>
              );
            })
          }
        </div>
      </div>
    );
  }
}
