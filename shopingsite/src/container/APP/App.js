import React, { Component } from 'react';
import Header from '../Header/Header';
import ViewProduct from '../Admin/ViewProduct/ViewPrdouct';
import ViewProduct2 from '../Client/viewProduct/ViewPrdouct';
import Home from '../Client/Home/Home';
import Register from '../Client/Register/Register';
import { Route,Switch } from 'react-router-dom'
import AddProduct from '../Admin/AddProduct/AddProduct'
import ChanagPassword from '../Client/ChangPassword/ChangPassword'
import Cloging from '../Client/Login/Login'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Header></Header>
      <Switch>        
          <Route path='/' exact component={Home}/>
          <Route path='/ViewProduct' exact component={ViewProduct}/>
          <Route path='/ViewProduct2'  exact component={ViewProduct2}/>
          <Route path='/Register'  exact component={Register}/>
          <Route path='/AddProduct'  exact component={AddProduct}/>
          <Route path='/ChanagPassword'  exact component={ChanagPassword}/>
          <Route path='/Cloging'  exact component={Cloging}/>
        </Switch>
      </div>
    );
  }
}

export default App;
