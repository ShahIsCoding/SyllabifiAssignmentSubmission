import React from 'react';

function Desktop1() {
    return(
        <div className='bg'>
            <div className='container'>
                <div className='desk main-card'>
                    <div className='header'>
                        <h3>What subjects do you specialise in?</h3>
                        <h6>You can add more than 1 subject</h6>
                    </div>
                    <div className='cards'>
                        <div className='card maths'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/maths.jpg`} className='card__img '  />
                            <h5 className='card__text'>Mathematics</h5>
                            <input type='checkbox' value='mathematics'/>
                        </div>
                        <div className='card chem'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/chem.jpg`} className='card__img '  />
                            <h5 className='card__text'>Chemistry</h5>
                            <input type='checkbox' value='Chemistry'/>
                        </div>
                        <div className='card phy'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/physics.jpg`} className='card__img '  />
                            <h5 className='card__text'>Physics</h5>
                            <input type='checkbox' value='Physics'/>
                        </div>
                        <div className='card bio'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/bio.jpg`} className='card__img '  />
                            <h5 className='card__text'>Biology</h5>
                            <input type='checkbox' value='biology'/>
                        </div>
                        <div className='card lr'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/lr.jpg`} className='card__img '  />
                            <h5 className='card__text'>logicalResoning</h5>
                            <input type='checkbox' value='logicalResoning'/>
                        </div>
                        <div className='card other'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/others.jpg`} className='card__img '  />
                            <h5 className='card__text'>Others</h5>
                            <input type='checkbox' value='Others'/>
                        </div>
                    </div>
                    <div className='footer'>
                        <a className='previous text' href='/login'>Previous</a>
                        <div className='footer__right'>
                            <a className='skip text' href='/desktop2'>Skip</a>
                            <a className='btn_purple next' href='/desktop2'>Next</a>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desktop1;

