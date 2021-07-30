import React from 'react';
import LogIn from './LoginComponent';
import Desktop1  from './Desktop1Component';
import Desktop2 from './Desktop2Component';
import Level from './LevelComponent';

import { Route,Redirect, Switch } from 'react-router-dom';
function Main() {
    return(
        <div className='Main'>
            <Switch>
                <Route exact path='/home' component={() => <Level />} /> // TO the Level component 
                <Route exact path='/desktop1' component={() => <Desktop1 />} /> //TO the Desktop1 component
                <Route exact path='/desktop2' component={() => <Desktop2 />} /> //TO the Level component
                <Route path='/login' component={() => <LogIn />} /> //to login form 
                <Redirect to='/login'/>
            </Switch>
        </div>
    );
}

export default Main;