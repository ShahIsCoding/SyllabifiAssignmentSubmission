import React from 'react';

function LogIn() {
    return( 
        <div className='bg'>
            <div className='LogIn main-card'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/mobile.jpg`}  className='LogIn__img'/>      
                <div className='LogIn__form'>
                    <div className='logo'>
                        <div className='logo__semicircle'></div>
                        <div className='logo__circle logo__circle--y'></div>
                        <div className='logo__circle logo__circle--p'></div>
                    </div>
                    <div className='company_name'>
                        <h2>Company</h2>    
                    </div>
                    <h3 className='register p45'>Register</h3>
                    <form className='Form'>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Name</label>
                            <input className='Form__divs--input' type='text' name='name' placeholder='Enter full name'/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Email</label>
                            <input className='Form__divs--input' type='email' name='email' placeholder='Enter Email'/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Create Password</label>
                           <input className='Form__divs--input' type='password' name='password' placeholder='Enter Password'/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Re-enter Password</label>
                           <input className='Form__divs--input' type='password' name='password' placeholder='Re-enter Password'/>
                        </div> 

                    <div className='btns'>
                        <div className='btns__b1'>
                            <button className='btns__purple '>Sign Up &#8250;</button>
                            <div className='login'>
                                <h4> Already have an account?</h4>
                                <a href='/desktop1'>Login here</a>
                            </div>
                        </div>
                        <div className='btns__b2'>
                            <h4> Or Sign Up with  </h4>
                            <a href='#'>Goolge</a>
                        </div>
                    </div> 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;