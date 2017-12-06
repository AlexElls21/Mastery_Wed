import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Browsing from './Components/browsing/Browsing';
import Edit from './Components/Edit/Edit';
// import Details from './Components/details/Details'



export default (
    <div>

        <Link to='/details'>Details</Link>
        <Switch>
            <Route component={Browsing} exact path='/' />
            <Route component={Edit} exact path='/edit/:one' />
            {/* <Route component={Details} exact path='/details' /> */}
        </Switch>
    </div>
)