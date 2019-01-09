import React, { Component } from 'react';

export default class ChanagPassword extends Component {
    render() {
        return (
            <div className="container">
             <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Loging</strong>
                    </h5>
            <form style={{marginTop:10}}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>              
                <button type="submit" className="btn btn-primary">Submit</button>
         </form>
            </div>
            </div>
        );
    }
}
