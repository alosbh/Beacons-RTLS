/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import './custom.css'

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem className="custom-icon-box" eventKey={1} href="#">
            <i className="pe-7s-map-marker custom-icon" />
            <p className="custom-icon-text">Position</p>
          </NavItem>

          <NavItem className="custom-icon-box" eventKey={1} href="#">
            <i className="pe-7s-server custom-icon" />
            <p className="custom-icon-text">Database</p>
          </NavItem>

          <NavItem className="custom-icon-box" eventKey={1} href="#">
            <i className="pe-7s-note2 custom-icon" />
            <p className="custom-icon-text">Reports</p>
          </NavItem>

          <NavItem className="custom-icon-box" eventKey={1} href="#">
            <i className="pe-7s-user custom-icon" />
            <p className="custom-icon-text">Admin</p>
          </NavItem>
          
          
          
          
          
        </Nav>
        
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Options"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Action</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Logout
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
