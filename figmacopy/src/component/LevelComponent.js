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
            <Dashboard />
            <Header name={this.props.user} />
            <LevelBody name={this.props.user}/>
        </div>
    );}
}

export default Level;