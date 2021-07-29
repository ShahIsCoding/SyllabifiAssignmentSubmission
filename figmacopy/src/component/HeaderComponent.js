import React from 'react';
import { Component } from 'react';

class Header extends Component {
    
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div className='nav'>
            <div className=' nav__item nav__XP'>
                <h4 className='front'>2500</h4>
                <h4 className='later'>XP</h4>
            </div>
            <div className='nav__item nav__INR'>
                <h4 className='front'>2500</h4>
                <h4 className='later'>INR(&#x20b9;)</h4>
            </div>
            <div className='nav__item nav__notification'>
                <div className='nav__notification--bell'></div>
                <div className='nav__notification--red'></div>                            
            </div>
            <div className='nav__item nav__profile'>
                <h4>Nishta</h4>
                <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse29.png`} className='image' alt='images'/>
            </div>
        </div>
    );}
}

export default Header;