import React from 'react';

function LogIn() {
    return( 
        <div className='LogIn '>
            <div className='contanier'>
                <div className='LogIn__form row'>
                     <img src='img\adomas-aleno-4vrZpOo7fTc-unsplash.jpg' alt='phone pic'/>                   
                    <div className='form'>
                    <div className='company_name'>
                        <h2>Company</h2>    
                    </div>
                    <h3 className='register p45'>Register</h3>
                        <form>
                            <div className='p45'>
                                <label>Name</label>
                                <input type='text' name='name' placeholder='Enter full name'/>
                            </div>
                            <div className='p45'>
                                <label>Email</label>
                                <input type='email' name='email' placeholder='Enter Email'/>
                            </div>
                            <div className='p45'>
                                <label>Create Password</label>
                                <input type='password' name='password' placeholder='Enter Password'/>
                            </div>
                            <div className='p45'>
                                <label>Re-enter Password</label>
                                <input type='password' name='password' placeholder='Re-enter Password'/>
                            </div>
                        </form>
                        <div className='btns'>
                                <div className='btns--b1'>
                                    <button className='btn btn-sign'>Sign Up &#8250;</button>
                                    <div className='login'>
                                        <h4> Already have an account?</h4>
                                        <a href='#'>Login here</a>
                                    </div>
                                </div>
                                
                                <div className='btns--b2'>
                                    <h4> Or Sign Up with  </h4>
                                    <a href='#'>Goolge</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;