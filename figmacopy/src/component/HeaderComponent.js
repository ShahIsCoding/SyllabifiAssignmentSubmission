import React from 'react';

function Header() {
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
                <div className='image'></div>
            </div>
        </div>
    );
}

export default Header;