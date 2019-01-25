import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CategorySelect from '../../action/CategorySelect';
import ImageUploader from 'react-images-upload';
import {  MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
let data;
class AddProduct extends Component {
    state = {
        product_Name: "",
        Prize: "",
        qty: "",
        active: 1,
        Category_id: "",
        Sub_Category_Id: "",
        image: [],
        errproduct_Name:"",
        errCategory_id:""
    }
    componentWillMount = () => {
        this.props.action.fetchCategory.FetchCategory();
    }
    AddProduct = (Event) => {
        // if(!this.state.product_Name){
        //     this.setState({errproduct_Name:"Please Enter Prdouct value"})
        // }
        // if(!this.state.Category_id){
        //     this.setState({errproduct_Name:"Please Select Category"})
        // }

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
            <div className="conatiner" style={{marginLeft:"10%",width:"80%"}}> 
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Add product</p>
                <div className="grey-text">
                  <MDBInput                  
                    label= {this.state.errproduct_Name?this.state.errproduct_Name:"Product Name"}
                    onChange={(Event) => { Event.preventDefault(); this.setState({ product_Name: Event.target.value })}} 
                    icon="user"
                    group   
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                    <select className="form-control" name="ProductCategory" onChange={this.categoryChangeHandler.bind(this)} >
                                        <option>select Category</option>
                                        {
                                            data
                                        }
                                    </select>
                                    <select style={{marginTop:"40px"}} className="form-control" onChange={(Event) => this.setState({ Sub_Category_Id: Event.target.value })} >
                                        <option>select Subcategory </option>
                                        {datasub.map(data => {
                                            return <option key={data.Sub_Category_Id} value={data.Sub_Category_Id}>{data.Sub_Category_Name}</option>
                                        })}
                                    </select>
                  <MDBInput
                  style={{marginTop:"40px"}}
                  onChange={(Event) => this.setState({ Prize: Event.target.value })}
                    label="Prize"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Quentity"
                    onChange={(Event) => this.setState({ qty: Event.target.value })}
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                 <ImageUploader
                                        withIcon={true}
                                        buttonText="Choose Images"
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        onChange={this.imagemultiple.bind(this)}
                                        withPreview={true}
                                        id="file"
                                        maxFileSize={5242880}
                                        withLabel={false} />
                
                </div>
                
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit"  onClick={this.AddProduct.bind(Event)} >
                    ADD product
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
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
