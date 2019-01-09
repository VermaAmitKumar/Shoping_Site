import React, { Component } from 'react';
import './css/style.css';
// import './css/font-awesome.min.css';

export default class Header extends Component {
    componentDidMount=()=>{
		// addEventListener("load", function () {
		// 	setTimeout(hideURLbar, 0);
		// }, false);

		// function hideURLbar() {
		// 	window.scrollTo(0, 1);
		// }
    }
    render() {
        return (
            <p>
	<h1>
		<span>L</span>ogin
		<span>F</span>orm
	</h1>

	<div className="sub-main-w3" style={{}}>
		<form className="login" action="#" method="post">
			<p className="legend">Login Here<span className="fa fa-hand-o-down"></span></p>
			<div className="input">
				<input type="email" placeholder="Email" name="email" required />
				<span className="fa fa-envelope"></span>
			</div>
			<div className="input">
				<input type="password" placeholder="Password" name="password" required />
				<span className="fa fa-unlock"></span>
			</div>
			<button type="submit" className="submit">
				<span className="fa fa-sign-in"></span>
			</button>
		</form>
	</div>
    </p>
            );
            }
        }
