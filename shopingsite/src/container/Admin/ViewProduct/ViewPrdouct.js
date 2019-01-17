import React, { Component } from 'react'
import './ViewPrdouct.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProdctAction from '../../action/CategorySelect';
// const img1 = require('../../../Image/1.jpg');
const img2 = require('../../../Image/2.jpg');

class ViewPrdouct extends Component {
    componentDidMount = () => {
        this.props.action.ShowPrdoct.FetchProductAction();
    }
    deleteButtonHandler=(id)=>{
        // debugger
        console.log(id);
    }
    UpdateButtonHandler=(id)=>{
        // debugger
        console.log(id);
    }
    render() {
        let data
        if(this.props.ShowPrdoct){
         data =  this.props.ShowPrdoct.map(data=>{
            return <tr key={data.Product_id}>
            <td>{data.product_Name}</td>
            <td>{data.Category_Name}</td>
            <td>{data.Sub_Category_Name}</td>
            <td><img src={img2} alt={data.product_Name} ></img></td>
            <td>{data.Prize}</td>
            <td>{data.qty}</td>
            {/* <td>{data.active}</td> */}
            <th>
                <button  type="button" onClick={()=>this.UpdateButtonHandler(data.Product_id)} className="btn btn-danger">Edit</button>&nbsp;&nbsp;
                <button type="button"  onClick={()=>this.deleteButtonHandler(data.Product_id)} className="btn btn-warning" >Delete</button>
            </th>
        </tr>
        })
    }
        return (
            <div className="container">
                <table id="example" className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                        <th>product_Name</th>
                            <th>Category_Name</th>
                            <th>Sub_Category_Name</th>
                            <th>Product_Images</th>
                            <th>Prize</th>
                            <th>Qty</th>
                            {/* <th>Active</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                    <tfoot>
                        <tr>
                        <th>product_Name</th>
                            <th>Category_Name</th>
                            <th>Sub_Category_Name</th>
                            <th>Product_Images</th>
                            <th>Prize</th>
                            <th>Qty</th>
                            {/* <th>Active</th> */}
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ShowPrdoct: state.FetchProductReducer.ProductData,
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        ShowPrdoct:bindActionCreators(ProdctAction, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPrdouct)
