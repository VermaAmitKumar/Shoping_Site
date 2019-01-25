import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RegisterDemoAction from '../../action/RegisterDemoAction';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const lock = require('../../../Image/lock.png');
const unlock = require('../../../Image/unlock.jpg');
let data4, data5, dataselect, data2, data3;
let baseUrl = "http://192.168.200.149:3000/"
let $imagePreview = null;
let length, parpage, datalength, renderPageNumbers;

class DefaultPaginationTable extends React.Component {
  state = {
    modal: false,
    modal2: false,
    Name: "",
    Email: "",
    Country_Id: "",
    state_Id: "",
    city_id: "",
    Sallery: "",
    did: "",
    updingfetchdata: [],
    Profile_Picturte: [],
    Profile_Picturte2: "",
    file: '',
    DataLimit:"",
    Active: 1,
    imagePreviewUrl: '',
    updateid: "",
    pagination: "",
    
  };
  componentDidMount = () => {    
    const ID = 1
    const limit=5
    this.setState({ pagination: ID,DataLimit:limit});
    this.props.action.FetchCountry.ShowRegisterDataAction(ID,limit);
    this.props.action.FetchCountry.SelectCountryAction();
    this.props.action.FetchCountry.FetchCountDataAction();
  }
  EditButtonHandler = (id, data) => {

    this.setState({
      modal: !this.state.modal
    });
    if (id) {
      this.props.action.FetchCountry.FetchSingleRegisterDataAction(id);
    }
    // const ID = 1
    // this.props.action.FetchCountry.ShowRegisterDataAction(ID);
    if (data) {
      this.setState(
        {
          Name: data.Register_Name,
          Email: data.Email,
          Country_Id: data.Country_Id,
          state_Id: data.State_Id,
          city_id: data.City_Id,
          Sallery: data.Sallery,
          Profile_Picturte2: data.Profile_Picturte,
          updateid: data.Register_Id,
        }
      )
    } else {
      const formData = new FormData();
      formData.append('Register_Name', this.state.Name);
      formData.append('Email', this.state.Email);
      formData.append('Country_Id', this.state.Country_Id);
      formData.append('State_Id', this.state.state_Id);
      formData.append('City_Id', this.state.city_id);
      formData.append('Sallery', this.state.Sallery);

      if (this.state.Profile_Picturte.length !== 0) {
        formData.append('Profile_Picturte', this.state.Profile_Picturte);
      } else {
        formData.append('Profile_Picturte', this.state.Profile_Picturte2);
      }
      formData.append('Active', this.state.Active);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      this.props.action.FetchCountry.UpdateRegisterDataAction(this.state.updateid, formData, config);
    }
  }  
  deleteButtonHandler = (id, id2) => {
    if (window.confirm(id2 == 0 ? "do You Want to unlock " : "do You Want to LOck")) {
      let status;
      if (id2 === 0) {
        status = 1
      } else if (id2 === 1) {
        status = 0
      }
      let register = {
        "Active": status
      }
      this.props.action.FetchCountry.DeleteRegisterDataAction(id, register);
    }
  }
  HandleCountrySelect = (e) => {
    var id = e.target.value;
    this.setState({ Country_Id: id })
    this.props.action.FetchCountry.SelectStateAction(id);
  }
  HandleCountryState = (e) => {
    var id = e.target.value;
    this.setState({ state_Id: id })
    this.props.action.FetchCountry.SelectCityAction(id);
  }
  HandleCountryCity = (e) => {
    var id = e.target.value;
    this.setState({ city_id: id })
  }
  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    this.setState({ Profile_Picturte: file })
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  parpage = (id) => {
    var id = id.target.value;
    var id2 = 1;
    this.setState({ DataLimit: id })
    this.props.action.FetchCountry.ShowRegisterDataAction(id2,id);
  }
  paginationHndler = (id) => {
    let ID = id.target.childNodes[0].data;
    if (this.state.pagination) {
      if (ID === "Previous") {
        if (this.state.pagination == 1) {
          ID = 1
        } else {
          ID = this.state.pagination - 1
        }
      }
      if (ID === "Next") {
        ID = this.state.pagination + 1
      }
    }
    if (ID !== "Previous" && ID !== "Next") {
      this.setState({ pagination: ID })
    }
    this.props.action.FetchCountry.ShowRegisterDataAction(ID,this.state.DataLimit);
  }
  showalldata=()=>{
    if (this.props.Fetchdata) {
      data4 = this.props.Fetchdata.map((data,key) => {
        return <tr key={data.Register_Id}>
        {/* <th>{key+1}</th> */}
          <th>{data.Register_Name}</th>
          <th>{data.Email}</th>
          <th>{data.Country_name}</th>
          <th>{data.state_name}</th>
          <th>{data.City_name}</th>
          <th>{data.Sallery}</th>
          <td><img src={baseUrl.concat(data.Profile_Picturte)} style={{ width: "50px", height: "50px" }}></img></td>
          <td> <span className="glyphicon glyphicon-edit" aria-hidden="true"></span><button className="btn btn-primary a-btn-slide-text" onClick={() => this.EditButtonHandler(data.Register_Id, data)}><strong>Edit</strong></button>
            <img src={data.Active === 1 ? unlock : lock} onClick={() => this.deleteButtonHandler(data.Register_Id, data.Active)}   ></img>
            {/* &nbsp;&nbsp; <span className="glyphicon glyphicon-remove" aria-hidden="true"></span><button onClick={() => this.DeleteButtonHandler(data.Register_Id)} className="btn btn-primary a-btn-slide-text"><strong>Delete</strong></button> */}
          </td>
        </tr>        
      })
    }
  }
  setcountry=()=>{
    if (this.props.FetchCountry) {
      dataselect = this.props.FetchCountry.map(data => {
        return <option key={data.Country_id} value={data.Country_id} >{data.Country_name}</option>
      })
    }
  }
  setstate=()=>{
    if (this.props.Fetchstate) {
      data2 = this.props.Fetchstate.map(data => {
        return <option key={data.state_id} value={data.state_id} >{data.state_name}</option>
      })
    }
  }
  setcity=()=>{
    if (this.props.FetchCity) {
      data3 = this.props.FetchCity.map(data => {
        return <option key={data.City_id} value={data.City_id} >{data.City_name}</option>
      })
    }
  }
  FillEditData=()=>{
    if (this.props.singledata) {
      data5 = this.props.singledata.map(data => {
        return <Form>
          <Modal isOpen={this.state.modal} toggle={() => this.EditButtonHandler(0, 0)} className={this.props.className}>
            <ModalHeader toggle={() => this.EditButtonHandler(0, 0)}>Modal title</ModalHeader>
            <ModalBody>
              <div className="container">
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input type="text" name="Name" id="exampleName" defaultValue={data.Register_Name} placeholder="Enter Name" onChange={(Event) => { this.setState({ Name: Event.target.value }) }} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" defaultValue={data.Email} placeholder="with a placeholder" onChange={(Event) => { this.setState({ Email: Event.target.value }) }} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select Country</Label>
                  <select className="form-control" name="ProductCategory" onChange={this.HandleCountrySelect.bind(this)}  >
                    <option defaultValue={data.Country_Id ? data.Country_Id : ""} >{data.Country_name ? data.Country_name : "select Category"} </option>
                    {dataselect}
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select state</Label>
                  <select className="form-control" name="ProductCategory" onChange={this.HandleCountryState.bind(this)} >
                    <option defaultValue={data.state_Id ? data.state_Id : ""} >{data.state_name ? data.state_name : "select Category"} </option>
                    {data2}
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select city</Label>
                  <select className="form-control" name="ProductCategory" onChange={this.HandleCountryCity.bind(this)} >
                    <option defaultValue={data.city_id ? data.city_id : ""} >{data.City_name ? data.City_name : "select Category"} </option>
                    {data3}
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Sallery</Label>
                  <Input type="Sallery" name="Sallery" defaultValue={data.Sallery} id="exampleSallery" placeholder="Enter SALLERY" onChange={(Event) => { this.setState({ Sallery: Event.target.value }) }} />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Image</Label>
                  <input className="Profile_Picturte"
                    type="file" onChange={(e) => this._handleImageChange(e)} />
                  {$imagePreview ? $imagePreview :
                    <img src={baseUrl.concat(data.Profile_Picturte)} style={{ width: "100px", height: "100px" }}></img>
                  }
                </FormGroup>
              </div>
            </ModalBody >
            <ModalFooter>
              <Button color="primary" onClick={() => this.EditButtonHandler(0, 0)} >Update</Button>{' '}
              <Button color="secondary" onClick={() => this.EditButtonHandler(0, 0)} >Cancel</Button>
            </ModalFooter>
          </Modal>
        </Form>
      })
    }
  }
  setImage=()=>{
    let { imagePreviewUrl } = this.state;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{ width: 100, height: 100 }} />);
    }
  }
  setPagination = ()=>{
    datalength = this.props.countdataforpagination;
    if (datalength) {
      parpage = this.state.DataLimit;
      if (datalength <= 10) {
        length = 1;
      } else {
        debugger
        length = parseInt(datalength / parpage);
        if(parseInt(this.state.DataLimit)!==this.props.countdataforpagination){
        length = length+1
      }
    }
    }
    let pagination = [];
    for (let i = 0; i <= length; i++) {
      pagination.push(i);
    }
     renderPageNumbers = pagination.map(number => {
      return (
        <li key={number} onClick={this.paginationHndler.bind(this)} value={number} className="page-item">
          <a className="page-link" value={number} href="#">{number + 1}</a>
        </li>
      );
    });
  }
  renderset = () => {
    return    <div>
    <div style={{ float: "right", marginTop: "29px" }}>
      Show <select name="cars" style={{ width: "41px" }} onChange={this.parpage.bind(this)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value={this.props.countdataforpagination}>All</option>
      </select>entries
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={this.paginationHndler.bind(0)} value="1"><a className="page-link" href="#">Previous</a></li>
        {renderPageNumbers}
        {/* <li class="page-item"><a class="page-link" onClick={this.paginationHndler.bind(0)} href="#">Next</a></li> */}
      </ul>
    </nav>
    <table id="example" className="table table-striped table-bordered" style={{ width: "100%", border: "1px solid", padding: "10px", boxShadow: "5px 10px" }}>
      <thead>
        <tr>
        {/* <th>#</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Country </th>
          <th>State </th>
          <th>City </th>
          <th>Salary</th>
          <td>Profile</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
        {data4}
      </tbody>
    </table>
    {data5}
  </div>

 
  }
  render() {
    this.setImage();
    this.showalldata();
    this.setcountry()
    this.setstate();
    this.setcity();
    this.FillEditData();
    this.setPagination();  
    return (
      this.renderset()
    );
  }
}
const mapStateToProps = (state) => {
  return {
    countdataforpagination: state.RegisterDemoRedux.totalRegisterData,
    singledata: state.RegisterDemoRedux.FetchSingleRegisterData,
    Fetchdata: state.RegisterDemoRedux.ShowRegisterData,
    FetchCity: state.RegisterDemoRedux.Selectcity,
    Fetchstate: state.RegisterDemoRedux.Selectstate,
    FetchCountry: state.RegisterDemoRedux.SelectCountry
  }
}
const mapDispatchToProps = dispatch => ({
  action: {
    FetchCountry: bindActionCreators(RegisterDemoAction, dispatch),
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(DefaultPaginationTable)