import React from 'react';
import Dashboard from './DashboardComponents';
import LevelBody from './LevelBodyComponents';
import Header from './HeaderComponent';
function Level() {
    return(
        <div className='level'>
            <Dashboard />
            <Header />
            <LevelBody />
        </div>
    );
}

export default Level;