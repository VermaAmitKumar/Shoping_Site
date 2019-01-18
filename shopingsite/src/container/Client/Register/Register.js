import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RegisterAddedAction from '../../action/CategorySelect';

 class SignUp extends Component {
    state={
        Register_Name:"",
        Role:"Admin",
        Address:"",
        Email:"",
        password:"",
        Phone_Number:"",
        active:"1"        
    }
    SubmitButtonHandler=(E)=>{
        E.preventDefault();
        this.props.action.RegisterData.RegisterSaveAction(this.state);
        this.props.history.push({pathname: '/Cloging'})
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Sign up</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0" style={{ marginTop: 18 }}>
                        <form className="text-center" style={{ color: 757575 }} >
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="text" id="materialRegisterFormFirstName"  className="form-control" name="Full Name" placeholder="Full Name" onChange={(Event)=>this.setState({Register_Name:Event.target.value})}  />
                                        <label htmlFor="materialRegisterFormFirstName">Full name</label>
                                    </div>
                                </div>                               
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="email" id="materialRegisterFormEmail" className="form-control" onChange={(Event)=>this.setState({Email:Event.target.value})} />
                                        <label htmlFor="materialRegisterFormEmail">E-mail</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" onChange={(Event)=>this.setState({password:Event.target.value})} />
                                        <label htmlFor="materialRegisterFormPassword">Password</label>
                                        <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                            At least 8 characters and 1 digit
                            </small>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="text" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock"  onChange={(Event)=>this.setState({Phone_Number:Event.target.value})} />
                                        <label htmlFor="materialRegisterFormPhone">Phone number</label>
                                        <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                            Optional - for two step authentication
                            </small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="text" id="materialRegisterFormAddress" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" onChange={(Event)=>this.setState({Address:Event.target.value})} />
                                        <label htmlFor="materialRegisterFormAddress">Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="md-form">
                            </div>        
                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={this.SubmitButtonHandler.bind(Event)}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
        RegisterData:state.RegisterReducer.RegisterSaveAction
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        RegisterData: bindActionCreators(RegisterAddedAction, dispatch),
        
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
