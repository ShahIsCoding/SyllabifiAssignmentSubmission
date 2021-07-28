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
                <Route exact path='/home' component={() => <Level />} />
                <Route exact path='/desktop1' component={() => <Desktop1 />} />
                <Route exact path='/desktop2' component={() => <Desktop2 />} />
                <Route path='/login' component={() => <LogIn />} />
                <Redirect to='/login'/>
            </Switch>
        </div>
    );
}

export default Main;