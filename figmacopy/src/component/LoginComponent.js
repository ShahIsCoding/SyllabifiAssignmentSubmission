import React, { Component } from 'react';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
                name:'',
                email:'',
                password:'',
                repassword:''
        }
        this.value = this.value.bind(this);
        this.check = this.check.bind(this);
    }

    value(e){
        console.log(e.target.name,'  ',e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        });
        console.log(this.state);
    }
    check(){
        if(this.state.password!== this.state.repassword){
            alert('Password re enterd is not same')
        }
        if(this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.repassword === ''){
            alert('Cannot leave a field empty')
        }
    }
    render(){
    return( 
        <div className='bg'>
            <div className='LogIn main-card'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/mobile.jpg`}  className='LogIn__img' alt='mobile.jpg'/>      
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
                            <input className='Form__divs--input' type='text' name='name' placeholder='Enter full name' onBlur={this.value}/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Email</label>
                            <input className='Form__divs--input' type='email' name='email' placeholder='Enter Email' onBlur={this.value}/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Create Password</label>
                           <input className='Form__divs--input' type='password' name='password' placeholder='Enter Password' onBlur={this.value}/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Re-enter Password</label>
                           <input className='Form__divs--input' type='password' name='password' placeholder='Re-enter Password' onBlur={this.value} />
                        </div> 
                        <div className='btns'>
                            <div className='btns__b1'>
                                <a className='btn__signin btn_purple' onClick={this.check} href='/desktop1'>Sign Up &#8250;</a>
                                <div className='login'>
                                    <h4> Already have an account?</h4>
                                    <a href='/desktop1' onClick={this.check} >Login here</a>
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
    );}
}

export default LogIn;