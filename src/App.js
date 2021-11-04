import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddCustomer from "./components/addCustomer.component";
import Customer from "./components/customer.component";
import CustomersList from "./components/customerList.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/customers" className="navbar-brand">
            DVD Rental Shop
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/customers"} className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addCustomers"} className="nav-link">
                Add Customer
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
          
            <Route exact path="/addCustomers" component={AddCustomer} />
          
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
