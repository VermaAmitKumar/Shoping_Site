import React, { Component } from 'react'
import './ViewPrdouct.css'
import { connect } from "react-redux";
import ClientViewCategory from './ViewCategory'
import Modal from 'react-modal';

import { bindActionCreators } from "redux";
import * as ProdctAction from '../../action/CategorySelect';
import { Checkbox } from 'material-ui';
import Axios from 'axios';
const img1 = require('../../../Image/1.jpg');
const img2 = require('../../../Image/2.jpg');
class ClientViewPrdouct extends Component {
    state = {
        catData: [],
        SubCatData: [],
        Category_id: "",
        Sub_Category_id: "",
        product: [],
        show: false 
    }
    componentDidMount = () => {
        Axios.get('http://localhost:3000/Categry/Show').then(Response => {
            this.setState({ catData: Response.data });
        })
        this.props.action.ShowPrdoct.FetchProductAction();
    }
    CategoryIdHandle = (id) => {
        this.setState({ Category_id: id })
        if (id) {
            Axios.get('http://localhost:3000/SubCategry/SelectBaseOnId/' + id).then(Response => {
                this.setState({ SubCatData: Response.data });
            })
        }
    }
    Sub_CategoryIdHandle = (id) => {
        this.setState({ Sub_Category_id: id })
        if (this.state.Category_id && id) {
            this.props.action.ShowPrdoct.FetchProductAction2(this.state.Category_id, id);
        }
    }
    
    showProductDeatil=(ProductId)=>{
        this.props.history.push({
            pathname: '/product-id/' + ProductId
            })
    }
    render() {
        let data, data2, data3, data4;
        if (this.state.SubCatData) {
            data3 = this.state.SubCatData.map(data => {
                return <div className="p"><input type="radio" name="Category" value="other" onChange={() => this.Sub_CategoryIdHandle(data.Sub_Category_Id)} /> {data.Sub_Category_Name} </div>
            })
        }

        if (this.state.catData) {
            data2 = this.state.catData.map(data => {
                return <div className="p"><input type="radio" name="subcat" value="other" onChange={() => this.CategoryIdHandle(data.Category_id)} /> {data.Category_Name} </div>
            })
        }
        // debugger
        let imagepath = "http://192.168.200.149:3000/";
        if (this.props.ShowPrdoct) {
            data = this.props.ShowPrdoct.map(data => {
                console.log(data);
                return <div className="col-md-4">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img src={imagepath.concat(data.Image_Name)}  className="imgstyle" alt="true" onClick={()=>this.showProductDeatil(data.Product_id)} />
                            <a className="btn-overlay" href="abc.com">
                            </a>
                        </div>
                        <figcaption className="info-wrap">
                            <h6 className="title text-dots"><a href="abc.com" style={{color:"black"}}>{data.product_Name}</a></h6>
                            <div className="action-wrap">
                                {/* <a href="abc.com" className="btn btn-primary btn-sm float-right"> Order </a> */}
                                <div className="price-wrap h5">
                                    <span className="price-new">{data.Prize}</span>
                                    <del className="price-old">{data.Prize + 100}</del>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            })
        }
        if (this.props.ShowPrdoct2.length != 0) {
            data4 = this.props.ShowPrdoct2.map(data => {
                return <div className="col-md-4">
                    <figure className="card card-product">
                        <div className="img-wrap">
                        <img src={imagepath.concat(data.Image_Name)}  className="imgstyle" alt="true" />
                            <a className="btn-overlay" href="abc.com">
                            </a>
                        </div>
                        <figcaption className="info-wrap">
                            <h6 className="title text-dots"><a href="abc.com">{data.product_Name}</a></h6>
                            <div className="action-wrap">
                                {/* <a href="abc.com" className="btn btn-primary btn-sm float-right"> Order </a> */}
                                <div className="price-wrap h5">
                                    <span className="price-new">{data.Prize}</span>
                                    <del className="price-old">{data.Prize + 100}</del>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            })
        }

        return (
            <div className="container" >
            <div className="row">
                <div style={{ float: "left" }}>
                    <div className="categort" >Category Name
                        {data2}
                    </div>
                    {this.state.Category_id ?
                        <div className="categort" > Category Name
                            {data3}
                        </div> : ""}
                </div>
                <div className="row extra" style={{ float: "right" }}>
                    {data4 ? data4 : data}
                </div>     
                </div>           
            </div>           

        );
    }
}
const mapStateToProps = (state) => {
    return {    
        category: state.category.category,
        ShowPrdoct: state.FetchProductReducer.ProductData,
        ShowPrdoct2: state.FetchProductReducer.ProductData2
    }
}
const mapDispatchToProps = dispatch => ({
    action: {
        fetchCategory: bindActionCreators(ProdctAction, dispatch),
        ShowPrdoct: bindActionCreators(ProdctAction, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientViewPrdouct)
