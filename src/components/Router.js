//  PACKAGES
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//  COMPONENTS
import App from '../App';
import Calendar from './Calendar';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/calendar" component={Calendar}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;