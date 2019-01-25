import React, { Component } from 'react';
import Axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as categoryAction from '../../action/CategorySelect';

  class Subcategory extends Component {
    state = {
        showData: []
    }
    componentWillMount=()=>{ 
              
    }
    componentWillUpdate = () => {
    //     if (this.props.SCId) {    
    //         this.props.action.category.SelectSubcategory(this.props.SCId);
    //     }
        //  ;
    
        if (this.props.SCId) {
            if (!this.state.showData || (this.state.showData && this.state.showData.Sub_Category_Id !== this.props.SCId)) {
                Axios.get("http://localhost:3000/SubCategry/SelectBaseOnId/" + this.props.SCId).then(Response => {
                    this.setState({ showData: Response.data });
                    
                })
            }
        }
    }
    render() {
        
        //  
        // if (this.props.SCId) {
        //     this.props.action.fetchCategory.FetchSubCategory(this.props.SCId);
        // }
        // var subcat = "";
        // if (this.props.subcategory) { 
        //     subcat = this.props.subcategory.map(data => {
        //         return <option key={data.Sub_Category_Id} value={data.Sub_Category_Id} >{data.Sub_Category_Name}</option>
        //     })
        // }       
        return this.state.showData.map(data => {
            return <option key={data.Sub_Category_Id} value={data.Sub_Category_Id}>{data.Sub_Category_Name}</option>
        })
    }
}

// const mapStateToProps = (state) => {
//     return {
//         SelectSubcategory: state.SelectSubcategory.SelectSubcategoryReducer
//         // subcategory: state.category.Subcategory //reducer
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     action: {
//         category: bindActionCreators(categoryAction, dispatch)
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Subcategory)
export default  Subcategory;