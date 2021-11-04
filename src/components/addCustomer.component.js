import React, { Component } from "react";
import CustomerDataService from "../services/customer.service";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.onChangeStore_id = this.onChangeStore_id.bind(this);
    this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
    this.onChangeLast_name = this.onChangeLast_name.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress_id = this.onChangeAddress_id.bind(this);
    this.onChangeActivebool = this.onChangeActivebool.bind(this);
    this.onChangeCreate_date = this.onChangeCreate_date.bind(this);
    this.onChangeLast_update = this.onChangeLast_update.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    this.newCustomer = this.newCustomer.bind(this);

    this.state = {
      id: null,
      store_id:1,
      first_name: "",
      last_name:"",
      email:"",
      address_id:1,
      activebool:false,
      create_date:null,         
      last_update:null,
      active:1
    
  };
}

onChangeStore_id(e) {
    this.setState({
        store_id: e.target.value
    });
  }

  onChangeFirst_name(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLast_name(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAddress_id(e) {
    this.setState({
      address_id: e.target.value
    });
  }

  onChangeActivebool(e) {
    this.setState({
      activebool: e.target.value
    });
  }

  onChangeCreate_date(e) {
    this.setState({
      create_date: e.target.value
    });
  }

  onChangeLast_update(e) {
    this.setState({
      last_update: e.target.value
    });
  }

  onChangeActive(e) {
    this.setState({
      active: e.target.value
    });
  }

  saveCustomer() {
    console.log("saveCustomer called")
    var data = {
    
        store_id:this.state.store_id,
        first_name: this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        address_id:this.state.address_id,
        activebool:this.state.activebool,
        create_date:this.state.create_date,         
        last_update:this.state.last_update,
        active:this.state.active
      
    };

    CustomerDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          store_id:response.data.store_id,
          first_name: response.data.first_name,
          last_name:response.data.last_name,
          email:response.data.email,
          address_id:response.data.address_id,
          activebool:response.data.activebool,
          create_date:response.data.create_date,         
          last_update:response.data.last_update,
          active:response.data.active

          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCustomer() {
    this.setState({
      id: null,
      store_id:1,
      first_name: "",
      last_name:"",
      email:"",
      address_id:1,
      activebool:false,
      create_date:null,         
      last_update:null,
      active:1
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.activebool ? (
          <div>
            <h4>Customer Modified successfully!</h4>
            <button className="btn btn-success" onClick={this.newCustomer}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="store_id">Store ID</label>
              <input
                type="text"
                className="form-control"
                id="store_id"
                required
                value={this.state.store_id}
                onChange={this.onChangeStore_id}
                name="store_id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirst_name}
                name="first_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                required
                value={this.state.last_name}
                onChange={this.onChangeLast_name}
                name="last_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address_id">Address ID</label>
              <input
                type="text"
                className="form-control"
                id="address_id"
                required
                value={this.state.address_id}
                onChange={this.onChangeAddress_id}
                name="address_id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="activebool">Active Bool</label>
              <input
                type="text"
                className="form-control"
                id="activebool"
                required
                value={this.state.activebool}
                onChange={this.onChangeActivebool}
                name="activebool"
              />
            </div>

            <div className="form-group">
              <label htmlFor="create_date">Create Date</label>
              <input
                type="text"
                className="form-control"
                id="create_date"
                required
                value={this.state.create_date}
                onChange={this.onChangeCreate_date}
                name="create_date"
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_update">Last Update</label>
              <input
                type="text"
                className="form-control"
                id="last_update"
                required
                value={this.state.last_update}
                onChange={this.onChangeLast_update}
                name="last_update"
              />
            </div>

            <div className="form-group">
              <label htmlFor="active">Active</label>
              <input
                type="text"
                className="form-control"
                id="active"
                required
                value={this.state.active}
                onChange={this.onChangeActive}
                name="active"
              />
            </div>

            <button onClick={this.saveCustomer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
  }
