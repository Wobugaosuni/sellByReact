import React from 'react';
import './index.styl';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

import PureReanderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Search">
        <SearchHeader searchValue={this.props.params.keywords} />
        <SearchList
          category={this.props.params.category}
          keywords={this.props.params.keywords}
        />
      </div>
    );
  }

  componentDidMount() {
    // console.log('mount params', this.props.params);
  }

}
