import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditdataModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false      
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });   
  }  
  render() {    
    return (
      <div className="container">
        <Form>
              <div className="container">
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input type="text" name="Name" id="exampleName" placeholder="Enter Name"  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select Country</Label>
                  <select className="form-control" name="ProductCategory"  >
                    <option>select Category</option>                    
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select state</Label>
                  <select className="form-control" name="ProductCategory"  >
                    <option>select Category</option>                    
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select city</Label>
                  <select className="form-control" name="ProductCategory" >
                    <option>select Category</option>                    
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Sallery</Label>
                  <Input type="Sallery" name="Sallery" id="exampleSallery" placeholder="Enter SALLERY" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Image</Label>
                  <input className="Profile_Picturte"
                    type="file"/>                  
                </FormGroup>
              </div>
        </Form>
      </div>
      
    );
  }
}

export default EditdataModal