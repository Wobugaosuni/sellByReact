import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.styl';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

import PureReanderMixin from 'react-addons-pure-render-mixin';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureReanderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <div role="containers:Search">
        <SearchHeader searchValue={this.props.match.params.keywords} />
        <SearchList
          category={this.props.match.params.category}
          keywords={this.props.match.params.keywords}
        />
      </div>
    );
  }

  componentDidMount() {
  }

}

export default Search;
