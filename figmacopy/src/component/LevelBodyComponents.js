import React from 'react';

function LevelBody(){ 
    return(
        <div className='levelbody'>
            <h3 className='top__heading'>Welcome Back, Nishta!</h3>
            <div className=' mainbody'>
                <div className='col__left'>
                    <div className='col__left--box1'>
                        <div className='box1__left  col__primary'> 
                            <div className='papercircle papercircle--rd '>
                                <div className='rdpaper'></div>
                            </div>
                            <div className='box1__left--text'> 
                                <h3>See What's on pirority?</h3>
                                <h4>Complete <mark>12 rejected questions</mark> to earn <mark>&#x20b9; 30/q</mark><mark></mark>&emsp;&emsp;<mark>&#8594;</mark></h4>
                            </div>
                        </div>
                        <div className='box1__right col__primary'>
                            <div className='papercircle papercircle--gr '>
                                    <div className='grpaper'></div>
                            </div>
                            <div className='box1__right--text'> 
                                <h3>New Task</h3>
                                <h4>12&emsp;&emsp;<strong>&#8594;</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div className='col__left--box2 col__primary'>

                    </div>
                    <div className='col__left--box3 col__primary'>

                    </div>
                </div>
                <div className='col__right col__primary'></div>
            </div>
        </div>
    );
}
export default LevelBody;