import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import {
    NavLink
} from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
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
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">About US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" tag={Link} to="/ViewProduct2">View Prdouct</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" tag={Link} to="/Register">Register</NavLink>
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
                        <li className="nav-item dropdown dmenu">
                            <NavLink className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Profile
                </NavLink>
                            <div className="dropdown-menu sm-menu">
                                <NavLink className="dropdown-item" href="#">Update Profile</NavLink>
                                <NavLink className="dropdown-item" href="/ChanagPassword">Chang Password</NavLink>
                                <NavLink className="dropdown-item" href="#">Logout</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Cloging">Login</a>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-default my-2 my-sm-0" type="submit">Search</button>
              </form> */}
                </div>
            </nav>
        );
    }
}
