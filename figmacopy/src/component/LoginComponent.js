import React, { Component } from 'react';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
                name:'',
                email:'',
                password:'',
                repassword:''
        }//states to preserv the data of form 
        this.value = this.value.bind(this);
        this.check = this.check.bind(this);
    }

    value(e){
        this.setState({
            [e.target.name]:e.target.value
        });//onchange in form updates the respective field 
    }
    check(){
        if(this.state.password!== this.state.repassword){
            alert('Password re enterd is not same')
        }
        if(this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.repassword === ''){
            alert('Cannot leave a field empty')
        }//check id password and re entered  password are same or not .
    }
    render(){
    return( 
        <div className='bg'>
            <div className='LogIn main-card'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/mobile.jpg`}  className='LogIn__img' alt='mobile.jpg'/>  
                {/* getting the mobile img */}
                <div className='LogIn__form'>
                    <div className='logo'>
                        <div className='logo__semicircle'></div>
                        <div className='logo__circle logo__circle--y'></div>
                        <div className='logo__circle logo__circle--p'></div>
                    </div>
                    {/* creating the company logo */}
                    <div className='company_name'>
                        <h2>Company</h2>    
                    </div>
                    <h3 className='register p45'>Register</h3>
                    <form className='Form'>
                        {/* form component with name, password,email  */}
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Name</label>
                            <input className='Form__divs--input' type='text' name='name'value={this.state.name} placeholder='Enter full name' onChange={this.value}/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Email</label>
                            <input className='Form__divs--input' type='email' name='email' value={this.state.email} placeholder='Enter Email' onChange={this.value}/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Create Password</label>
                           <input className='Form__divs--input' type='password' name='password' value={this.state.password} placeholder='Enter Password' onChange={this.value}/>
                        </div>
                        <div className='Form__divs'>
                            <label className='Form__divs--label'>Re-enter Password</label>
                           <input className='Form__divs--input' type='password' name='repassword' value={this.state.repassword} placeholder='Re-enter Password' onChange={this.value} />
                        </div> 
                        <div className='btns'>
                            <div className='btns__b1'>
                                <a className='btn__signin btn_purple btn__click' onClick={this.check} href='/desktop1'>Sign Up &#8250;</a>
                                <div className='login'>
                                    <h4> Already have an account?</h4>
                                    <a href='/desktop1' onClick={this.check} >Login here</a>
                                    {/* directs to desktop 1 when clicked */}
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