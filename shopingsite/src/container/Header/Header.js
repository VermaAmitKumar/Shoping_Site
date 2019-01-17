import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
// import { Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as logingAction from '../action/CategorySelect';
import { connect } from "react-redux";
import {
    NavLink
} from 'reactstrap';

class Header extends Component {
    linkClickHandler = () => {
        this.props.actions.LogingData.logoutuser();
    }
    adminlinkClickHandler = () => {
        this.props.actions.LogingData.Adminlogoutuser();
    }
    render() {
        const isUserLoggedIn = this.props.LogingReducer.tokenId ? this.props.LogingReducer.tokenId !== "" : false;
        const AdminisUserLoggedIn = this.props.adminLogingReducer.AdmintokenId ? this.props.adminLogingReducer.AdmintokenId  !== "" : false;
        return (
            //-----------------------------admin Menu------------------------
            <div className="main">            
                <div className="Client">
                     <nav className="navbar navbar-expand-sm   navbar-light bg-light">
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>

                 <NavLink className="navbar-brand" tag={Link} to="/">Flipkart</NavLink>
                 <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                             <NavLink className="nav-link" tag={Link} to="/">Home <span className="sr-only">(current)</span></NavLink>
                         </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" tag={Link} to="/ViewProduct2">View Prdouct</NavLink>
                         </li> 
                         <li className="nav-item">
                             <NavLink className="nav-link" tag={Link} to="/Register">Register</NavLink>
                         </li>
                         <li className="nav-item dropdown dmenu">
                                 <NavLink className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                     Profile </NavLink>
                                 <div className="dropdown-menu sm-menu">
                                     <NavLink className="dropdown-item" href="#">Update Profile</NavLink>
                                     <NavLink className="dropdown-item" href="/ChanagPassword">Chang Password</NavLink>
                                     <NavLink className="dropdown-item" tag={Link} to="#" onClick={this.linkClickHandler.bind(this)} >Logout</NavLink>
                                 </div>
                             </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" tag={Link} to="/Cloging">Login</NavLink>
                         </li>
                         <li className="nav-item dropdown dmenu">
                             <NavLink className="nav-link dropdown-toggle" tag={Link} to="#" id="navbardrop" data-toggle="dropdown">
                                 Product
                         </NavLink>
                             <div className="dropdown-menu sm-menu">
                                 <NavLink className="dropdown-item" tag={Link} to="/AddProduct">Add Product</NavLink>
                                 <NavLink className="dropdown-item" tag={Link} to="/ViewProduct">View Product</NavLink>
                             </div>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link" tag={Link} to="#" onClick={this.adminlinkClickHandler.bind(this)}>Admin Logout</NavLink>
                         </li>
                         {/* <li className="nav-item">
                         <NavLink className="nav-link" tag={Link} to="/Admin/Login">Admin_Login</NavLink>
                         </li> */}

                     </ul>
                     {/* <form className="form-inline my-2 my-lg-0">
                         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                             <button className="btn btn-outline-default my-2 my-sm-0" type="submit">Search</button>
               </form> */}
                </div>
             </nav>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        LogingReducer: state.LogingReducer,
        adminLogingReducer:state.AdminReducer
    }
};

const mapDispatchToProps = dispatch => ({
    actions: {
        LogingData: bindActionCreators(logingAction, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
