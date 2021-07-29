import React from 'react';

function Dashboard(){ 
    return(
            <div className='dashboard'>
                <div className='dashboard__header'>
                    <div className='dashboard__header--logo'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/companylogo.png`} alt='compnay' />
                    </div>
                    <div className='dashboard__header--company_name'>
                        <h2>Company</h2>    
                    </div>
                </div>
                <div className='dashboard__items'>
                    <div className='item item--dashboard'>
                        <div className='img__dashboard imgs'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Category.png`} alt='category' />
                        </div>
                        <h5>Dashboard</h5>
                    </div>
                    <div className='item item--task'>
                        <div className='img__tasks imgs'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Work.png`} alt='work' />
                        </div>
                        <h5>Tasks</h5>
                    </div>
                    <div className='item item--task'>
                        <div className='img__perfomance imgs'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Activity.png`} alt='activity' />
                        </div>
                        <h5>Performance</h5>
                    </div>
                    <div className='item item--money'>
                        <div className='img__earnings imgs'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Wallet.png`} alt='wallet' />
                        </div>
                        <h5>Earnings</h5>
                    </div>
                    <div className='item item--profile'>
                        <div className='img__profile imgs'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Profile.png`} alt='profile' />
                        </div>
                        <h5>Profile</h5>
                    </div>
                </div>
            </div>
    );
}
export default Dashboard;