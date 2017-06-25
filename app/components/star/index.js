import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const score = this.props.star;

    return (
      <div role="component:Star">
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            let lightClass = score >= item ? ' light-star' : '';
            return (
              <span onClick={this.starClick.bind(this, index)} key={index} className={`icon-star${lightClass}`}></span>
            );
          })
        }
      </div>
    );
  }

  starClick(index) {
    if(!this.props.edit) {
      return;
    }

    this.props.starClick(index+1);
  }

}
