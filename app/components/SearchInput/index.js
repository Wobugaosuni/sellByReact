import React from 'react';
import PureReanderMixin from 'react-addons-pure-render-mixin';

import './index.styl';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div role="component:SearchInput">
        <input
          type="text"
          className="search-input"
          placeholder="请搜索"
          value={this.state.searchValue}
          onChange={this.onInputChange.bind(this)}
          onKeyUp={this.onInputKeyUp.bind(this)}
        />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      searchValue: this.props.searchValue
    });
  }


  onInputChange(event) {
    let This = this;

    This.setState({
      searchValue: event.target.value
    });
  }

  onInputKeyUp(event) {
    let This = this;

    if (event.keyCode !== 13) {
      return;
    }

    This.props.enterClick(This.state.searchValue);
  }
}
