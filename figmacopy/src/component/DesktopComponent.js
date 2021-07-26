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
                            <div className='card__img card__img--maths'></div>
                            <div className='card__text'>Mathematics</div>
                            <input type='checkbox' value='mathematics'/>
                        </div>
                        <div className='card chem'>
                            <div className='card__img card__img--chem'></div>
                            <div className='card__text'>Chemistry</div>
                            <input type='checkbox' value='Chemistry'/>
                        </div>
                        <div className='card phy'>
                            <div className='card__img card__img--phy'></div>
                            <div className='card__text'>Physics</div>
                            <input type='checkbox' value='Physics'/>
                        </div>
                        <div className='card bio'>
                            <div className='card__img card__img--bio'></div>
                            <div className='card__text'>Biology</div>
                            <input type='checkbox' value='biology'/>
                        </div>
                        <div className='card lr'>
                            <div className='card__img card__img--lr'></div>
                            <div className='card__text'>logicalResoning</div>
                            <input type='checkbox' value='logicalResoning'/>
                        </div>
                        <div className='card other'>
                            <div className='card__img card__img--other'></div>
                            <div className='card__text'>Others</div>
                            <input type='checkbox' value='Others'/>
                        </div>
                    </div>
                    <div className='footer'>
                        <a className='previous'>Previous</a>
                        <div className='footer__right'>
                            <a className='skip'>Skip</a>
                            <button className='btns__purple'>Next</button>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desktop1;

/*--------------------------------------------------------------------------------------------Desktop 2-=----------------------------------------------------------------------------------------*/
