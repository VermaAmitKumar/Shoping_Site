import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RegisterDemoAction from '../action/RegisterDemoAction';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './DRegister.css'
import ShowData from './ShowData/ShowRegisterData'

// ---------------------Veriabls------------------------
let data, data2, data3
let $imagePreview = null;

class DRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      Name: "",
      Email: "",
      Country_Id: "",
      state_Id: "",
      city_id: "",
      Sallery: "",
      Active: 1,
      Profile_Picturte: [],
      file: '',
      imagePreviewUrl: ''
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount = () => {
    this.props.action.FetchCountry.SelectCountryAction();
  }
  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
      file: "",
      imagePreviewUrl: ""
    });
    const formData = new FormData();
    formData.append('Register_Name', this.state.Name);
    formData.append('Email', this.state.Email);
    formData.append('Country_Id', this.state.Country_Id);
    formData.append('State_Id', this.state.state_Id);
    formData.append('City_Id', this.state.city_id);
    formData.append('Sallery', this.state.Sallery);
    formData.append('Profile_Picturte', this.state.Profile_Picturte);
    formData.append('Active', this.state.Active);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    this.props.action.FetchCountry.SaveRegisterDataAction(formData, config);
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
  setImage = () => {
    let { imagePreviewUrl } = this.state;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{ width: 100, height: 100 }} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
  }
  setCountry = () => {
    if (this.props.FetchCountry) {
      data = this.props.FetchCountry.map(data => {
        return <option key={data.Country_id} value={data.Country_id} >{data.Country_name}</option>
      })
    }
  }
  setstate = () => {
    if (this.props.Fetchstate) {
      data2 = this.props.Fetchstate.map(data => {
        return <option key={data.state_id} value={data.state_id} >{data.state_name}</option>
      })
    }
  }
  setcity = () => {
    if (this.props.FetchCity) {
      data3 = this.props.FetchCity.map(data => {
        return <option key={data.City_id} value={data.City_id} >{data.City_name}</option>
      })
    }
  }
  renderset = () => {
    return <div className="container">
      <Form>
        <Button color="danger" style={{ backgroundColor: "white", float: "right" }} onClick={this.toggle}><img src="http://192.168.200.149:3000/add.ico"></img> </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div className="container">
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="Name" id="exampleName" placeholder="Enter Name" onChange={(Event) => { this.setState({ Name: Event.target.value }) }} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={(Event) => { this.setState({ Email: Event.target.value }) }} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select Country</Label>
                <select className="form-control" name="ProductCategory" onChange={this.HandleCountrySelect.bind(this)} >
                  <option>select Category</option>
                  {
                    data
                  }
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select state</Label>
                <select className="form-control" name="ProductCategory" onChange={this.HandleCountryState.bind(this)} >
                  <option>select Category</option>
                  {
                    data2
                  }
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select city</Label>
                <select className="form-control" name="ProductCategory" onChange={this.HandleCountryCity.bind(this)} >
                  <option>select Category</option>
                  {
                    data3
                  }
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Sallery</Label>
                <Input type="Sallery" name="Sallery" id="exampleSallery" placeholder="Enter SALLERY" onChange={(Event) => { this.setState({ Sallery: Event.target.value }) }} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Image</Label>
                <input className="Profile_Picturte"
                  type="file"
                  onChange={(e) => this._handleImageChange(e)} />
                <div className="imgPreview">
                  {$imagePreview}
                </div>
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Form>
      <div className="table-responsive">
        <ShowData />
      </div>
    </div>

  }
  render() {
    this.setImage();
    this.setCountry();
    this.setstate();
    this.setcity();
    return (
      this.renderset()
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // Fetchdata: state.RegisterDemoRedux.ShowRegisterData,
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

export default connect(mapStateToProps, mapDispatchToProps)(DRegister)