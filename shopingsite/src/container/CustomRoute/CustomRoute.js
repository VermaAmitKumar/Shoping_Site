import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

class CRoute extends Component {
    getExtractedJson({ component, cprivate, crole, actions, auth, ...rest }) {
        return rest;
    }
    render() {            
        const rest = this.getExtractedJson(this.props);
        const isUserLoggedIn = this.props.adminLogingReducer.tokenId ? this.props.adminLogingReducer.tokenId !== "" : false; 
        const AdminisUserLoggedIn = this.props.adminLogingReducer.AdmintokenId ? this.props.adminLogingReducer.AdmintokenId  !== "" : false;        
        const { component, cprivate } = this.props;
        const Component = component;                
        let redirectTo = undefined;  

        if(AdminisUserLoggedIn && rest.path === "/Admin" ){
            redirectTo = "/";   
         }   
         if(!AdminisUserLoggedIn && rest.path === "/AddProduct" ){
            redirectTo = "/admin";   
         }
         else if(!AdminisUserLoggedIn && rest.path === "/ViewProduct" ){
            redirectTo = "/admin";   
         }
        else if (isUserLoggedIn && rest.path === "/Cloging"){        
             redirectTo = "/";   
        }else if (isUserLoggedIn && rest.path === "/Register"){        
            redirectTo = "/";   
        }
        else if (!isUserLoggedIn && rest.path === "/ChanagPassword"){        
            redirectTo = "/cloging";   
        }  
        else if (!isUserLoggedIn && cprivate)
            redirectTo = "/Loging"; 
            return (
            <Route
                {...rest}
                render={props => (
                    (redirectTo)
                        ?  <Redirect to={{pathname:redirectTo, state:{from:props.location}}} />
                        : <Component {...props} />
                )}
            />
        );
    }
}
const mapStateToProps = (state) => {    
    
    return {
        LogingReducer: state.LogingReducer,
        adminLogingReducer:state.FetchProductReducer    
    }
};

const mapDispatchToProps = dispatch => ({
    actions: {
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CRoute)
