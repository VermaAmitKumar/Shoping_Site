import React, { Component } from 'react';

export default class ChanagPassword extends Component {
    render() {
        return (
            <div className="container">
            <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Chang Password</strong>
                    </h5>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Old DPASSWORD</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Old DPASSWORD" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">New Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="New Password" />
                    </div>                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
