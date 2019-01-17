import React, { Component } from 'react';
import './AdminHeade.css';
import { Link } from 'react-router-dom';
// import { Route, Redirect } from "react-router-dom";
import {
    NavLink
} from 'reactstrap';

class AdminHeader extends Component {
    linkClickHandler = () => {
        debugger
    }
    render() {
        // debugger;
        return (
            <div id="wrapper">
        <div class="overlay"></div>    
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                       Brand
                    </a>
                </li>
                <li>
                <NavLink className="nav-link" tag={Link} to="/">Home <span className="sr-only">(current)</span></NavLink>
                    {/* <a href="#">Home</a> */}
                </li>
                <li>
                    <NavLink className="nav-link" tag={Link} to="/ViewProduct2">View Prdouct</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" tag={Link} to="/Register">Register</NavLink>
                </li>
                {/* <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li> */}
                <li class="dropdown">
                  <a tag={Link} to="/AddProduct" class="dropdown-toggle" data-toggle="dropdown">product <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown-header">Product</li>
                    <li><NavLink tag={Link} to="/AddProduct">add Product</NavLink></li>
                    <li><NavLink tag={Link} to="/ViewProduct">View Product</NavLink></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a tag={Link} to="/AddProduct" class="dropdown-toggle" data-toggle="dropdown">product <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown-header">Product</li>
                    <li><NavLink tag={Link} to="/AddProduct">add Product</NavLink></li>
                    <li><NavLink tag={Link} to="/ViewProduct">View Product</NavLink></li>
                  </ul>
                </li>

                    {/* <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li> */}
                <li>
                    <NavLink tag={Link} to="/Cloging">Loging</NavLink>
                </li>
            </ul>
        </nav>
        <div id="page-content-wrapper">
            <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
                <span class="hamb-top"></span>
    			<span class="hamb-middle"></span>
				<span class="hamb-bottom"></span>
            </button>
          
        </div>

    </div>
        );
    }
}



export default AdminHeader
