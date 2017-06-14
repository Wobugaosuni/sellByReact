import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers';
import City from '../containers/City';
import Detail from '../containers/Detail';
import Home from '../containers/Home';
import Search from '../containers/Search';
import User from '../containers/User';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>

        <Route path="/" component={App}>

          <IndexRoute component={Home}></IndexRoute>
          <Route path="/city" component={City}></Route>
          <Route path="/search/:category(/:keywords)" component={Search}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/detail/:id" component={Detail}></Route>

        </Route>

      </Router>
    );
  }
}
