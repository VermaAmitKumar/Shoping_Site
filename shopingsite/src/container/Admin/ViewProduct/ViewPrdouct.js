import React, { Component } from 'react'
import './ViewPrdouct.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProdctAction from '../../action/CategorySelect';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const lock = require('../../../Image/lock.png');
const unlock = require('../../../Image/unlock.jpg');

class ViewPrdouct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          active:1
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle(id) {
        this.props.action.ShowPrdoctImage.FetchProductImageAction(id);
        this.setState({
          modal: !this.state.modal
        });
      }

    componentDidMount = () => {
        this.props.action.ShowPrdoct.AdminFetchProductAction();
    }    
    deleteButtonHandler=(id,id2)=>{
         
        let status;
        if(id2===0){
            status=1
        }else if(id2===1){
            status=0
        }
        let register = {
            "active":status
        }
        // if(id2===0){
        //     this.setState({active:1})
        // }else if(id2===1){
        //     this.setState({active:0})
        // }
        this.props.action.BlockUnblockProduct.BlockUnblockProductAction(id,register)
        this.props.history.push({pathname: '/ViewProduct'})
        }
    UpdateButtonHandler=(id)=>{
        //  
    }
    render() {
        let data,data2
        let imagepath = "http://192.168.200.149:3000/";
        if(this.props.ShowPrdoct){
         data =  this.props.ShowPrdoct.map(data=>{

            return <tr key={data.Product_id}>
            <td>{data.Product_id}</td>
            <td>{data.Product_Name}</td>
            <td>{data.Category_Name}</td>
            <td>{data.Sub_Category_Name}</td>
            {/* <td> <Button type="button"   className="btn btn-outline-primary" >show Image</Button></td> */}
            <td><img src={imagepath.concat(data.Image_Name)} onClick={()=>this.toggle(data.Product_id)}   alt="true" /></td>
            {/* <td><img src={img2} alt={data.product_Name} ></img></td> */}
            <td>{data.Prize}</td>
            <td>{data.qty}</td>
            {/* <td>{data.active}</td> */}
            <th>
                {/* <button  type="button" onClick={()=>this.UpdateButtonHandler(data.Product_id)} className="btn btn-danger">Edit</button>&nbsp;&nbsp; */}
                <img src={data.active===1?unlock:lock} onClick={()=>this.deleteButtonHandler(data.Product_id,data.active)}   ></img>
                {/* <button type="button"  onClick={()=>this.deleteButtonHandler(data.Product_id)} className="btn btn-warning" >Delete</button> */}
            </th>
        </tr>
        })
    }
        if(this.props.ShowPrdoctImage){
            data2 = this.props.ShowPrdoctImage.map(data=>{
                return <div class="col-sm-4">    <img src={imagepath.concat(data.Image_Name)} style={{width:150,height:150}} ></img></div>                            
            })
        }
        return (
            <div className="container">
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{width:'5000px'}}    >
                        <ModalHeader toggle={this.toggle}>View prdouct Image</ModalHeader>
                        <ModalBody >
                        <div class="row">
                        {data2}
                        </div>
                            {/* <img src={img2} style={{width:150,height:150}} ></img> */}                            
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <table id="example" className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                        <th>product Id</th>
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
        ShowPrdoct: state.FetchProductReducer.AdminProductData,
        ShowPrdoctImage: state.FetchProductReducer.ProductImage,
 }
}
const mapDispatchToProps = dispatch => ({
    action: {
        ShowPrdoct:bindActionCreators(ProdctAction, dispatch),
        ShowPrdoctImage:bindActionCreators(ProdctAction, dispatch),
        BlockUnblockProduct:bindActionCreators(ProdctAction, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPrdouct)
