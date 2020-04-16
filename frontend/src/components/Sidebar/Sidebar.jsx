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

import { MDBCol, MDBIcon } from "mdbreact";
import logo from "assets/img/logo.png";
import './custom.css'





import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  content: {
    
    
    borderRadius: 3,
    width:'90%',
    
    height: 35,
    padding: 4,
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop:8,
    marginBottom:8,
    '&:hover': {
      backgroundColor:"#5f5f5f",
    },
  },

  label:{
    fontSize:16,
    fontFamily:'Arial, sans-serif,Helvetica, sans-serif, Gill Sans, sans-serif, Lucida, sans-serif, Helvetica Narrow, sans-serif,  sans-serif'
  }
});

const beacons=[
  {
   "id":1,"Category":"Calibration","Subcategories":
   [
     {"id":1,"Subcategory":"Paquimetro","Tools":
      [
        {"id":1,"Name":"Paquimetro1"},
        {"id":2,"Name":"Paquimetro2"}
      ]
    },
    {"id":2,"Subcategory":"Micrometro","Tools":
      [
        {"id":3,"Name":"Micrometro1"},
        {"id":4,"Name":"Micrometro2"}
      ]
    }
   ]
  },

  { "id":2,"Category":"Tooling","Subcategories":
  [
    {"id":3,"Subcategory":"Gigas","Tools":
     [
       {"id":5,"Name":"Giga1"},
       {"id":6,"Name":"Giga2"}
     ]
   },
   {"id":4,"Subcategory":"MCUs","Tools":
     [
       {"id":7,"Name":"MCU1"},
       {"id":8,"Name":"Mcu2"}
     ]
   }
  ]

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

    const { classes } = this.props;
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

        <MDBCol  style={{width:'100', margin:10}}>
          <form className="form-inline mt-4 mb-4" style={{display:'flex', justifyContent:'space-evenly'}}>
            
            <input style={{height:35,width:'80%'}} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
            <MDBIcon icon="search" size='2x' style={{color:"#f1f1f1"}} />
            

          </form>
      </MDBCol>

            
          <TreeView
          
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          
            
            
          {beacons.map(({id,Category,Subcategories},i) => (

            
            <TreeItem 
            
            classes={{
              content: classes.content,
              label:classes.label
            }} 
            nodeId={"1."+id} label={Category}>
              
              {Subcategories.map(({id,Subcategory,Tools},j)=>(
                <TreeItem 
                classes={{
                  content: classes.content,
                  label:classes.label
                }} 
                className="tree-node" nodeId={"2."+id} label={Subcategory}>
                  
                  {Tools.map(({id,Name},j)=>(

                    <TreeItem 
                    classes={{
                      content: classes.content,
                      label:classes.label,
                      
                      
                    }} 
                    className="tree-node" nodeId={"3."+id} label={Name}/>

                  ))}
                  
                
                </TreeItem>

              ))}
              


            </TreeItem>
            



            
            ))}
          
          
          </TreeView>

          
          

          
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
