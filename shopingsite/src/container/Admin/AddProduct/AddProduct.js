import React, { Component } from 'react';

export default class AddProduct extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong>Add Product</strong>
                    </h5>
                    <div className="card-body px-lg-5 pt-0" style={{ marginTop: 18 }}>
                        <form className="text-center" style={{ color: 757575 }}>
                            <div className="form-group">
                                    <div className="md-form">
                                        <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                                        <label for="materialRegisterFormFirstName">Product Name</label>
                                    </div>
                                
                                <div className="form-group">
                                        <select class="form-control">
                                            <option>Default select</option>
                                        </select>
                                        <label for="materialRegisterFormFirstName">Product Category</label>
                                    </div>
                            </div>
                            <div className="form-group">                                
                                    <div className="form-group">
                                        <select class="form-control">
                                            <option>Default select</option>
                                        </select>
                                        <label for="materialRegisterFormFirstName">Product SubCategory</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                                        <label for="materialRegisterFormPassword">product Image</label>                                        
                                    </div>
                            </div>

                            <div className="md-form">
                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
                        </form>

                    </div>

                </div>
            </div>
        );
    }
}
