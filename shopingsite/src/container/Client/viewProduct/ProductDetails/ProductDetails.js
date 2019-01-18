import React, { Component } from 'react'
import './ViewDetail.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProdctAction from '../../../action/CategorySelect';
const img2 = require('../../../../Image/2.jpg');

 class ProductDetails extends Component {
componentDidMount=()=>{
    const { match: { params } } = this.props;
     const id =params.fid;
    this.props.action.ShowPrdoctImage.FetchProductImageAction(id);
    this.props.action.ShowPrdoctproductSingle.FetchProductSingleAction(id);
}
    render() {
        let data,data2;
        let imagepath = "http://192.168.200.149:3000/";
        if(this.props.ShowPrdoctImage){
            data=  this.props.ShowPrdoctImage.map(data=>{
                return   <div className="col-md-3 col-sm-6">
                <div className="product-grid"style={{height:"300px"}}>
                    <div className="product-image">
                        <a href="#">
                            <img className="pic-1" src={imagepath.concat(data.Image_Name)} style={{height:"300px"}}/>                                   
                        </a>                               
                        <span className="product-new-label">Sale</span>
                        <span className="product-discount-label">20%</span>
                    </div>                           
                </div>
            </div> 
            })
        }
        if(this.props.ShowPrdoctsingle){
            data2=  this.props.ShowPrdoctsingle.map(data=>{
                return <div className="row">
                <div className="col-md-5 col-sm-6 ">
                    <div className="product-grid" style={{height:"450px",width:"400px"}}>
                        <div className="product-image">
                            <a href="#">
                            <img className="pic-1" src={imagepath.concat(data.Image_Name)} style={{height:"400px"}}/>                                   
                                {/* <img className="pic-1" src={img2} style={{height:"400px"}} />                                    */}
                            </a>                               
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">20%</span>
                        </div>                           
                    </div>
                </div>                    
                <div className="col-md-6 col-sm-6">
                    <div className="product-grid" style={{height:"450px",padding:"5px"}}>
                        <h1>{data.product_Name}</h1>
                        <h2>Prize:{data.Prize}$</h2>
                        <h2>product qty:{data.qty}</h2>
                        <p>Special PriceGet extra ₹30 off (price inclusive of discount)T&C</p>
                        <p>Special PriceGet extra ₹30 off (price inclusive of discount)T&C</p>
                        <p>Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C</p>
                    </div>
                </div>                    
            </div>
            })
        }

        return (
            <div className="container">
                <h3 className="h3">View  Product Detail </h3>
                {data2}
                
                <div className="row" style={{marginTop:"40px"}}>
                  {data}               
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ShowPrdoctImage: state.FetchProductReducer.ProductImage,
        ShowPrdoctsingle: state.FetchProductReducer.productfetchSINgle,
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        ShowPrdoctImage:bindActionCreators(ProdctAction, dispatch),
        ShowPrdoctproductSingle:bindActionCreators(ProdctAction, dispatch),

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)




