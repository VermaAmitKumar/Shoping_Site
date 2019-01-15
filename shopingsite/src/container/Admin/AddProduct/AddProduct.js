import React, { Component } from 'react';
import axios from 'axios';
import Subcategory from './SelectsubCategoryById';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CategorySelect from '../../action/CategorySelect';

import Axios from 'axios';



let data;
class AddProduct extends Component {
    state = {
        product_Name: "",
        Prize: "",
        qty: "",
        active:1,
        Category_id: "",
        Sub_Category_Id: ""
    }
    componentWillMount = () => {
        this.props.action.fetchCategory.FetchCategory();
    }
    AddProduct = (Event) => {
        Event.preventDefault();
        this.props.action.AddPrdoct.ProductSaveAction(this.state);
    }  
    categoryChangeHandler(e) {
        this.props.action.fetchCategory.FetchCategory();
        var id = e.target.value;
        this.props.action.subcategory.SelectSubcategory(id);
        this.setState({ Category_id: e.target.value })      
    }    
    render() {
        if (this.props.category) {
            data = this.props.category.map(data => {
                return <option key={data.Category_id} value={data.Category_id} >{data.Category_Name}</option>
            })
        }
        let datasub = [];
            if (this.props.SelectSubcategory) {
                for (let i = 0; i < this.props.SelectSubcategory.length; i++) {
                    datasub[i] = this.props.SelectSubcategory[i];
                }
        }
        return (
            <div className="container">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Add Product</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0" style={{ marginTop: 18 }}>
                        <form className="text-center" style={{ color: 757575 }}   method="Post">
                            <div className="form-group">
                                <div className="md-form">
                                    <input type="text" id="materialRegisterFormFirstName" className="form-control" placeholder="Name" onChange={(Event) => { Event.preventDefault(); this.setState({ product_Name: Event.target.value }) }} />
                                    <label htmlFor="materialRegisterFormFirstName"></label>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" name="ProductCategory" onChange={this.categoryChangeHandler.bind(this)} >
                                        <option>select Category</option>
                                        {
                                            data
                                        }
                                    </select>
                                    <label htmlFor="materialRegisterFormFirstName"></label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group">
                                    <select className="form-control" onChange={(Event) => this.setState({ Sub_Category_Id: Event.target.value })} >
                                        <option>select Subcategory </option>
                                        { datasub.map(data => {
                                            return <option key={data.Sub_Category_Id} value={data.Sub_Category_Id}>{data.Sub_Category_Name}</option>
                                        })}
                                    </select>
                                    <label htmlFor="materialRegisterFormFirstName"></label>
                                </div>
                                <div className="md-form">
                                    <input type="text" id="Product_Prize" className="form-control" placeholder=" prize" onChange={(Event) => this.setState({ Prize: Event.target.value })} />
                                    <label htmlFor="Product_Prize"></label>
                                </div>
                                <div className="md-form">
                                    <input type="text" id="Product_qty" className="form-control" placeholder=" quntity" onChange={(Event) => this.setState({ qty: Event.target.value })} />
                                    <label htmlFor="Product_qty"></label>
                                </div>
                                <div className="form-group">
                                    <input type="file" className="form-control-file" name="file" id="file" multiple  />
                                    <label htmlFor="materialRegisterFormPassword"></label>
                                </div>
                            </div>
                            <div className="md-form">
                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={this.AddProduct.bind(Event)}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        category: state.category.category,
        SelectSubcategory: state.SelectSubcategoryReducer.SelectSubcategory,
        AddPrdoct:state.ProductReducer.ProductSaveAction
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        fetchCategory: bindActionCreators(CategorySelect, dispatch),
        subcategory: bindActionCreators(CategorySelect, dispatch),
        AddPrdoct:bindActionCreators(CategorySelect, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
