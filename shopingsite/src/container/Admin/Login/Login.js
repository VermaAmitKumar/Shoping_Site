import React, { Component } from 'react'
import './Loging.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AdminlogingAction from '../../action/CategorySelect';

 class AdminLogin extends Component {
    state={
        Email:"",
        password:"" ,
        Role:"Admin"       
    }
    SubmitButtonHndler=(Event)=>{
        Event.preventDefault();
        this.props.action.adminLogingData.AdminLogingAction(this.state);
        // console.log(this.state);
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="form_bg" style={{height:400}}>
                    <form>
                         <h2 className="text-center">Admin Login </h2>
                        <br/>
                        <div className="form-group">
                            <input 
                            type="email"
                            className="form-control"
                            id="userid"
                            placeholder="User id"
                            onChange={(Event)=>this.setState({Email:Event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <input 
                            type="password" 
                            className="form-control" 
                            id="pwd"
                             placeholder="Password"
                             onChange={(Event)=>this.setState({password:Event.target.value})} />
                        </div>
                        <br/>
                        <div className="align-center">
                            <button type="submit" className="btn btn-default" id="login" onClick={this.SubmitButtonHndler.bind(Event)}  >Login</button>
                        </div>  
                    </form>
                </div>
            </div>
        </div>   
        );
    }
}
const mapStateToProps = (state) => {
    return {        
        // LogingData:state.LogingReducer.LogingAction
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        adminLogingData: bindActionCreators(AdminlogingAction, dispatch),
        
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
