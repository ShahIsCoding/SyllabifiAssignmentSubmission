import React from 'react';

function Dashboard(){ 
    return(
            <div className='dashboard'>
                <div className='dashboard__header'>
                    <div className='logo'>
                    <a href="https://imgur.com/HPCIpVB"><img src="https://i.imgur.com/HPCIpVB.png" title="source: imgur.com" /></a>
                    </div>
                    <div className='company_name'>
                        <h2>Company</h2>    
                    </div>
                </div>
                <div className='dashboard__items'>
                    <div className='item'>
                        <div className='img__dashboard imgs'>
                            <a href="https://imgur.com/pa0o4Ue">
                                <img src="https://i.imgur.com/pa0o4Ue.png" title="source: imgur.com" />
                            </a>
                        </div>
                        <h5>Dashboard</h5>
                    </div>
                    <div className='item'>
                        <div className='img__tasks imgs'>
                            <a href="https://imgur.com/Y3B0wYx">
                                <img src="https://i.imgur.com/Y3B0wYx.png" title="source: imgur.com" />
                            </a>
                        </div>
                        <h5>Tasks</h5>
                    </div>
                    <div className='item'>
                        <div className='img__perfomance imgs'>
                            <a href="https://imgur.com/PRBem8q">
                                <img src="https://i.imgur.com/PRBem8q.png" title="source: imgur.com" />
                            </a>
                        </div>
                        <h5>Performance</h5>
                    </div>
                    <div className='item'>
                        <div className='img__earnings imgs'>
                            <a href="https://imgur.com/UknCFF9">
                                <img src="https://i.imgur.com/UknCFF9.png" title="source: imgur.com" />
                            </a>
                        </div>
                        <h5>Earnings</h5>
                    </div>
                    <div className='item'>
                        <div className='img__profile imgs'>
                            <a href="https://imgur.com/Ocjq1cX">
                                <img src="https://i.imgur.com/Ocjq1cX.png" title="source: imgur.com" />
                            </a>
                        </div>
                        <h5>Profile</h5>
                    </div>
                </div>
            </div>
    );
}
export default Dashboard;