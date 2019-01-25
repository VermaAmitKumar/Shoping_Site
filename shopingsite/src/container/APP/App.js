//----------------------------Package---------------------
import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
//-----------------------------------Files--------------
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Header2 from '../Admin/AdminHeader/AdminHeader';
import ViewProduct from '../Admin/ViewProduct/ViewPrdouct';
import ViewProduct2 from '../Client/viewProduct/ViewPrdouct';
import Home from '../Client/Home/Home';
import Register from '../Client/Register/Register';
import AddProduct from '../Admin/AddProduct/AddProduct'
import ChanagPassword from '../Client/ChangPassword/ChangPassword'
import Cloging from '../Client/Login/Login'
import Aloging from '../Admin/Login/Login'
import CRoute from '../CustomRoute/CustomRoute'
import productDetails from '../Client/viewProduct/ProductDetails/ProductDetails'
import DRegister from '../Demo/DRegister'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      {/* <Header2></Header2> */}
      <Switch>        
          <CRoute path='/' exact component={Home}/>
          <CRoute path='/ViewProduct' exact component={ViewProduct}/>
          <CRoute path='/ViewProduct2'  exact component={ViewProduct2}/>
          <CRoute path='/Register'  exact component={DRegister}/>
          <CRoute path='/AddProduct'  exact component={AddProduct}/>
          <CRoute path='/ChanagPassword'  exact component={ChanagPassword}/>
          <CRoute path='/Cloging'  exact component={Cloging}/>
          <CRoute path='/Admin'  exact component={Aloging}/>
          <CRoute exact path="/product-id/:fid" component={productDetails}></CRoute>
        </Switch>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
