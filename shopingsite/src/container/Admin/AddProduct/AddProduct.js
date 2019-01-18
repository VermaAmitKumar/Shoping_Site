import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CategorySelect from '../../action/CategorySelect';
import ImageUploader from 'react-images-upload';
let data;
class AddProduct extends Component {
    state = {
        product_Name: "",
        Prize: "",
        qty: "",
        active: 1,
        Category_id: "",
        Sub_Category_Id: "",
        image: []
    }
    componentWillMount = () => {
        this.props.action.fetchCategory.FetchCategory();
    }
    AddProduct = (Event) => {
        Event.preventDefault();
        const formData = new FormData();
        formData.append('product_Name', this.state.product_Name);
        formData.append('Prize', this.state.Prize);
        formData.append('qty', this.state.qty);
        formData.append('active', this.state.active);
        formData.append('Category_id', this.state.Category_id);
        formData.append('Sub_Category_Id', this.state.Sub_Category_Id);
        for (var i = 0; i < this.state.image.length; i++) {
            formData.append('image', this.state.image[i]);
        }
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // console.log(formData);
        this.props.action.AddPrdoct.ProductSaveAction(formData,config);
        this.props.history.push({pathname: '/ViewProduct'})
    }
    categoryChangeHandler(e) {
        this.props.action.fetchCategory.FetchCategory();
        var id = e.target.value;
        this.props.action.subcategory.SelectSubcategory(id);
        this.setState({ Category_id: e.target.value })
    }
    imagemultiple = (pictureFiles) => {
        // debugger
        this.setState({
            image: this.state.image.concat(pictureFiles)
        });
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
                        <form className="text-center" style={{ color: 757575 }} method="Post">
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
                                        {datasub.map(data => {
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
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText="Choose Images"
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        onChange={this.imagemultiple.bind(this)}
                                        withPreview={false}
                                        id="file"
                                        maxFileSize={5242880}
                                        withLabel={false} />
                                    {/* <input 
                                        type="file" 
                                        className="form-control-file"
                                        name="file" id="file"
                                        onChange={this.imagemultiple.bind(this)}
                                        multiple  /> */}
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
        AddPrdoct: state.ProductReducer.ProductSaveAction
    }
}
const mapDispatchToProps = dispatch => ({
    action: {
        fetchCategory: bindActionCreators(CategorySelect, dispatch),
        subcategory: bindActionCreators(CategorySelect, dispatch),
        AddPrdoct: bindActionCreators(CategorySelect, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
