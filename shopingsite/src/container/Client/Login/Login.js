import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as logingAction from '../../action/CategorySelect';

 class Loging extends Component {
    state={
        Email:"",
        password:""        
    }
    SubmitButtonHndler=(Event)=>{
        Event.preventDefault();
        this.props.action.LogingData.LogingAction(this.state);
    }
    render() {
        return (
            <div className="container">
             <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Loging</strong>
                    </h5>
            <form style={{marginTop:10}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email"
                        className="form-control" 
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" 
                        onChange={(Event)=>this.setState({Email:Event.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password" 
                        className="form-control"
                        id="exampleInputPassword1" 
                        placeholder="Password"
                        onChange={(Event)=>this.setState({password:Event.target.value})}  />
                </div>    
                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={this.SubmitButtonHndler.bind(Event)} >Login</button>          
         </form>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {        
        LogingData:state.LogingReducer.LogingAction
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        LogingData: bindActionCreators(logingAction, dispatch),
        
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loging)
