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
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";
import {FormInputs} from 'components/FormInputs/FormInputs.jsx'
import logo from "assets/img/logo.png";
import './custom.css'



import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


const beacons=[
  {
    "id":1,
    "name":"e024ff"
  },
  {
    "id":2,
    "name":"e0189f"
  },
  {
    "id":3,
    "name":"e012ee"
  }
]
class Sidebar extends Component {


  

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  
  render() {

    // const useStyles = makeStyles({
    //   root: {
    //     height: 240,
    //     flexGrow: 1,
    //     maxWidth: 400,
    //   },
    // });

    
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {/* {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )} */}
        <div className="logo">
          <a
            
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" 
              style={{
                boxShadow: "0px 10px 20px #000",
                borderRadius: "50%",
                opacity:0.8,
                backgroundColor:'#d7d7d7',
                

              }}
              
              />
            </div>
          </a>
          <a
            
            className="simple-text logo-normal"
          >
            Assets Tracking
          </a>
        </div>
        <div  className="sidebar-wrapper">

          <div className='row-search'>

            <form className='box-search'> 
            <input className='form-search'
              
              placeholder="Search"/>
            </form>
            


          </div>

            
          <TreeView
          className="root"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem className="tree-node" nodeId="1" label="Calibration">
            
            
          {beacons.map(beacon => (

            
            <TreeItem className="tree-node" id={beacon.id} label={beacon.name}></TreeItem>
            



            
            ))}
          </TreeItem>
          
          </TreeView>

          
          

          
        </div>
      </div>
    );
  }
}

export default Sidebar;
