import React, {useState} from 'react';
import './styles.css';

import {Link, useHistory} from 'react-router-dom'



// import './adminlte.css';
import "../../AdminLTE-3.0.1/plugins/fontawesome-free/css/all.min.css";

import "../../AdminLTE-3.0.1/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";

import "../../AdminLTE-3.0.1/dist/css/adminlte.css";

import  '../../AdminLTE-3.0.1/dist/js/adminlte.min.js';

import LogoImg from '../../assets/logo.png'

export default function RealTime (){

    
    const[id, setID] = useState('');
    const history=useHistory();

    
    return(

        <body class="hold-transition sidebar-mini layout-fixed">

            <div class="wrapper">

                {/* Barra superior dos ìcones*/}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    
                    <a class="btn btn-app">
                        <i class="fas fa-map-marker-alt"></i> Location
                    </a>

                    <a class="btn btn-app">
                        <i class="fas fa-clipboard-list"></i> Reports
                    </a>

                    <a class="btn btn-app">
                        <i class="fas fa-user-shield"></i> Admin
                    </a>

                    <a class="btn btn-app">
                        <i class="fas fa-cog"></i> Settings
                    </a>
                

                </nav>


                    
                {/* Container da barra lateral */}
                <aside class="main-sidebar elevation-4 sidebar-dark-purple">
                
                    {/* Caixa da Logo */}
                    <a href="../../index3.html" class="brand-link navbar-primary">
                        <img 
                            src={LogoImg}
                            alt="Jabil"
                            class="brand-image img-circle elevation-3"
                        />
                        <span class="brand-text font-weight-bold">Assets Tracking</span>
                    </a>
                    
                    {/* Barra lateral */}
                    <div class="sidebar">
                    

                        {/* Caixa de pesquisa */}
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                
                                <form class="form-inline ml-3">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                    </div>
                                </form>

                                
                            
                            </ul>

                            
                        </nav>
                
                    </div>
                
                </aside>


                <div class="content-wrapper">

                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h5>Browse Areas</h5>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="content">

                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">Box Build</h3>

                                            <div class="card-tools">
                                                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                    <i class="fas fa-minus"/>
                                                </button>
                                                
                                                <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                    <i class="fas fa-times"/>
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div class="card-body">
                                            
                                            
                                        </div>

                                
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                    </section>

                </div>
            


                <footer class="main-footer">
                    <div class="float-right d-none d-sm-block">
                        <b>Version</b> 0.0.3
                    </div>
                    <strong>Jabil BELO Automation</strong>
                </footer>


            

            </div>



        </body>
        
    )
}