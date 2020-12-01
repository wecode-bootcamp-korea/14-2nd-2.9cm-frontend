import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Component/Login/Login';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Order/Order';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Tv from './Pages/Tv/Tv';
import Footer from './Component/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/footer' component={Footer}></Route>
          <Route exact path='/login' component={Login}/>
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
