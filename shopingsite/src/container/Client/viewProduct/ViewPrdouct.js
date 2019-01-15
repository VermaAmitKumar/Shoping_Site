import React, { Component } from 'react'
import './ViewPrdouct.css'
const img1 = require('../../../Image/1.jpg');
// const img2 = require('../../../Image/2.jpg');
export default class Header extends Component {
    render() {
        return (
            <div className="container">
            <div style={{float:"left"}}>
                Choose Catgory            
            
            </div>
                <div className="row" style={{float:"right"}}>
                    <div className="col-md-4">
                        <figure className="card card-product">
                            <div className="img-wrap"> 
                                <img src={img1} alt="true" />
                                <a className="btn-overlay" href="abc.com">
                                    <i className="fa fa-search-plus">
                                    </i>
                                    Quick view
                                </a>
                            </div>
                            <figcaption className="info-wrap">
                                <h6 className="title text-dots"><a href="abc.com">Good item name</a></h6>
                                <div className="action-wrap">
                                    <a href="abc.com" className="btn btn-primary btn-sm float-right"> Order </a>
                                    <div className="price-wrap h5">
                                        <span className="price-new">$1280</span>
                                        <del className="price-old">$1980</del>
                                    </div> 
                                </div> 
                            </figcaption>
                        </figure> 
                    </div> 
                    <div className="col-md-4">
                        <figure className="card card-product">
                            <div className="img-wrap">
                                <img src={img1}  alt="true"/>
                                <a className="btn-overlay" href="abc.com">
                                    <i className="fa fa-search-plus"></i>
                                    Quick view
                                </a>
                            </div>
                            <figcaption className="info-wrap">
                                <h6 className="title text-dots"><a href="abc.com">The name of product</a></h6>
                                <div className="action-wrap">
                                    <a href="abc.com" className="btn btn-primary btn-sm float-right"> Order </a>
                                    <div className="price-wrap h5">
                                        <span className="price-new">$280</span>
                                    </div>
                                </div> 
                            </figcaption>
                        </figure> 
                    </div> 
            <div className="col-md-4">
                <figure className="card card-product">
                    <div className="img-wrap"><img src={img1} alt="true"/> 
                    <a className="btn-overlay" href="abc.com"><i className="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption className="info-wrap">
                        <h6 className="title text-dots"><a href="abc.com">Name of product</a></h6>
                        <div className="action-wrap">
                            <a href="abc.com" className="btn btn-primary btn-sm float-right"> Order </a>
                            <div className="price-wrap h5">
                                <span className="price-new">$280</span>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div> 
            </div> 
            </div> 
           
            );
    }
}
