import React, { Component } from 'react';

export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Sign up</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0" style={{ marginTop: 18 }}>
                        <form className="text-center" style={{ color: 757575 }}>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                                        <label for="materialRegisterFormFirstName">First name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="email" id="materialRegisterFormLastName" className="form-control" />
                                        <label for="materialRegisterFormLastName">Last name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="email" id="materialRegisterFormEmail" className="form-control" />
                                        <label for="materialRegisterFormEmail">E-mail</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                                        <label for="materialRegisterFormPassword">Password</label>
                                        <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                            At least 8 characters and 1 digit
                            </small>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="password" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                                        <label for="materialRegisterFormPhone">Phone number</label>
                                        <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                            Optional - for two step authentication
                            </small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="text" id="materialRegisterFormAddress" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                                        <label for="materialRegisterFormAddress">Address</label>
                                        
                                    </div>
                                </div>
                            </div>


                            <div className="md-form">

                            </div>
                            

                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
                        </form>

                    </div>

                </div>
            </div>
        );
    }
}
