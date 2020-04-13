import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react';

import RealTime from './pages/RealTime';
export default function Routes (){

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {RealTime}></Route>
            
            
            
        </Switch>
        </BrowserRouter>
    )
}