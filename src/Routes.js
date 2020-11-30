import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Tv from './pages/Tv/Tv';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/product-detail' component={ProductDetail} />
          <Route exact path='/tv' component={Tv} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
