import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Cart from './Pages/Cart/Cart';
import Login from './Component/Login/Login';
import Order from './Pages/Order/Order';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Tv from './Pages/Tv/Tv';
import Footer from './Component/Footer/Footer';
import SignUpFirst from './Component/SignUp/SignUpFirst';
import SignUpSeconds from './Component/SignUp/SignUpSeconds';
import SignUpThirds from './Component/SignUp/SignUpThirds';
import SignUpFourth from './Component/SignUp/SignUpFourth';
import SignUpFifth from './Component/SignUp/SignUpFifth';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/footer' component={Footer}></Route>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signUp1' component={SignUpFirst} />
          <Route exact path='/signUp2' component={SignUpSeconds} />
          <Route exact path='/signUp3' component={SignUpThirds} />
          <Route exact path='/signUp4' component={SignUpFourth} />
          <Route exact path='/signUp5' component={SignUpFifth} />
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
