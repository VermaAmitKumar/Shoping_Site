import React, { Component } from 'react'
import './ViewPrdouct.css'
const img1 = require('../../../Image/1.jpg');
const img2 = require('../../../Image/2.jpg');
export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-hover shopping-cart-wrap">
                        <thead className="text-muted">
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col" width="120">Quantity</th>
                                <th scope="col" width="120">Price</th>
                                <th scope="col" width="200" className="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <figure className="media">
                                        <div className="img-wrap"><img src={img1} className="img-thumbnail img-sm" /></div>
                                        <figcaption className="media-body">
                                            <h6 className="title text-truncate">Product name goes here </h6>
                                            <dl className="param param-inline small">
                                                <dt>Size: </dt>
                                                <dd>XXL</dd>
                                            </dl>
                                            <dl className="param param-inline small">
                                                <dt>Color: </dt>
                                                <dd>Orange color</dd>
                                            </dl>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </td>
                                <td>
                                    <div className="price-wrap">
                                        <var className="price">USD 145</var>
                                        <small className="text-muted">(USD5 each)</small>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                                    <a href="" className="btn btn-outline-danger"> × Remove</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <figure className="media">
                                        <div className="img-wrap"><img src={img2} className="img-thumbnail img-sm" /></div>
                                        <figcaption className="media-body">
                                            <h6 className="title text-truncate">Product name goes here </h6>
                                            <dl className="param param-inline small">
                                                <dt>Size: </dt>
                                                <dd>XXL</dd>
                                            </dl>
                                            <dl className="param param-inline small">
                                                <dt>Color: </dt>
                                                <dd>Orange color</dd>
                                            </dl>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </td>
                                <td>
                                    <div className="price-wrap">
                                        <var className="price">USD 35</var>
                                        <small className="text-muted">(USD10 each)</small>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist">
                                        <i className="fa fa-heart"></i>
                                    </a>
                                    <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
