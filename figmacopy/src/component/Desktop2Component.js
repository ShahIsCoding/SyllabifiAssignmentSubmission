import React from 'react';

function Desktop2() {
    return(
        <div className='bg'>
            <div className='container'>
                <div className='desk2 main-card'>
                    <h2 className='header'>Set your Preference</h2>
                    <div className='username'>
                        <div className='username__data'>
                            <label className='lab__data'>Set your username*</label>
                            <input className='inp__time'/>
                        </div>
                        <div className='username__time'>
                            <label className='lab__time'>Set your daily hours*</label>
                            <input className='inp__time' placeholder='01'/>
                        </div>
                        <div className='username__btn'>
                            <a className='dec'>-</a>
                            <a className='inc'>+</a>    
                        </div>
                    </div>
                    <div className='language'>
                        <h4 className='language__title'>Choose your preferred languages</h4>
                        <div className='language__opts'>
                            <div><input type='checkbox' />English</div>
                            <div><input type='checkbox' />Hindi</div>
                            <div><input type='checkbox' />Marathi</div>
                            <div><input type='checkbox' />Kanada</div>
                            <div><input type='checkbox' />Telugu</div>
                            <div><input type='checkbox' />Tamil</div>
                            <div><input type='checkbox' />Kashmiri</div>
                            <div><input type='checkbox' />Malayalam</div>
                            <div><input type='checkbox' />French</div>
                            <div><input type='checkbox' />German</div>
                            <div><input type='checkbox' />Spanish</div>
                            <div><input type='checkbox' />Russian</div>
                        </div>
                    </div>
                    <div className='pentab'>
                        <h4>Do you have a Pen-tablet/i-pad with stylus/android tablet with stylus?</h4>
                        <button className='btn-outline'>Yes</button>
                        <button className='btn-outline'>No</button>
                    </div>
                    <div className='footer'>
                        <a className='previous text' href='/desktop1'>Previous</a>
                        <div className='footer__right'>
                            <a className='skip text' href='/home'>Skip</a>
                            <a className='btn_purple next' href='/home'>Next</a>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desktop2;