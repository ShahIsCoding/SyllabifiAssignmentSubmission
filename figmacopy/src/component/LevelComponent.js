import React, { Component } from 'react';
import Dashboard from './DashboardComponents';
import LevelBody from './LevelBodyComponents';
import Header from './HeaderComponent';
class Level extends Component {
    constructor(props){
        super(props);

    }
    render(){
    return(
        <div className='level'>
            {/* Level Component is divided into 3 parts Header, Dashboard , LevelBody  */}
            <Dashboard />
            <Header />
            <LevelBody/>
        </div>
    );}
}

export default Level;