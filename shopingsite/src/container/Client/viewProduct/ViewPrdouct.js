import React, { Component } from 'react'
import './ViewPrdouct.css'
const img1 = require('../../../Image/1.jpg');
const img2 = require('../../../Image/2.jpg');
export default class Header extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <figure class="card card-product">
                            <div class="img-wrap"> 
                                <img src={img1}/>
                                <a class="btn-overlay" href="#">
                                    <i class="fa fa-search-plus">
                                    </i>
                                    Quick view
                                </a>
                            </div>
                            <figcaption class="info-wrap">
                                <h6 class="title text-dots"><a href="#">Good item name</a></h6>
                                <div class="action-wrap">
                                    <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                                    <div class="price-wrap h5">
                                        <span class="price-new">$1280</span>
                                        <del class="price-old">$1980</del>
                                    </div> 
                                </div> 
                            </figcaption>
                        </figure> 
                    </div> 
                    <div class="col-md-3">
                        <figure class="card card-product">
                            <div class="img-wrap">
                                <img src={img1} />
                                <a class="btn-overlay" href="#">
                                    <i class="fa fa-search-plus"></i>
                                    Quick view
                                </a>
                            </div>
                            <figcaption class="info-wrap">
                                <h6 class="title text-dots"><a href="#">The name of product</a></h6>
                                <div class="action-wrap">
                                    <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                                    <div class="price-wrap h5">
                                        <span class="price-new">$280</span>
                                    </div>
                                </div> 
                            </figcaption>
                        </figure> 
                    </div> 
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap"><img src={img1}/> 
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <h6 class="title text-dots"><a href="#">Name of product</a></h6>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                            <div class="price-wrap h5">
                                <span class="price-new">$280</span>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div> 
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap"> <img src={img1}/>
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <h6 class="title text-dots"><a href="#">The name of product</a></h6>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                            <div class="price-wrap h5">
                                <span class="price-new">$280</span>
                            </div>
                        </div>
                    </figcaption>
                </figure> 
            </div> 
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap"> <img src={img1}/>
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <h6 class="title text-dots"><a href="#">The name of product</a></h6>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                            <div class="price-wrap h5">
                                <span class="price-new">$280</span>
                            </div>
                        </div>
                    </figcaption>
                </figure> 
            </div> 
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap"> <img src={img1}/>
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <h6 class="title text-dots"><a href="#">The name of product</a></h6>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                            <div class="price-wrap h5">
                                <span class="price-new">$280</span>
                            </div>
                        </div>
                    </figcaption>
                </figure> 
            </div> 
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap"> <img src={img1}/>
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <h6 class="title text-dots"><a href="#">The name of product</a></h6>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                            <div class="price-wrap h5">
                                <span class="price-new">$280</span>
                            </div>
                        </div>
                    </figcaption>
                </figure> 
            </div> 
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap"> <img src={img1}/>
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <h6 class="title text-dots"><a href="#">The name of product</a></h6>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
                            <div class="price-wrap h5">
                                <span class="price-new">$280</span>
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
