import React from 'react';
import LogIn from './LoginComponent';
import Desktop1  from './DesktopComponent';
import Desktop2 from './Desktop2Component';

function Main() {
    return(
        <div className='Main'>
            {/* <LogIn /> */}
            {/* <Desktop1 /> */}
            <Desktop2 />
        </div>
    );
}

export default Main;