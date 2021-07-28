import React,{Component} from 'react';
import {list} from '../shared/assignmentlist';
class LevelBody extends Component{ 
    
    constructor(props){
        super(props);
    }
    render(){

        const assignments = list.map((assignment) =>{
            return(
                <div className='assignment'>
                    <div className='assignment__name'>
                        <div className='assignment__name--logo'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/Password.png`}  />                 
                        </div>
                        <div className='assignment__name--topic'>
                            <h5>Assignment #{assignment.number}</h5>
                            <h4>Physics <mark>(IIT JEE)</mark></h4>    
                        </div>
                    </div>
                    <div className='assignment__money'>
                        <h4>&#x20b9; {assignment.money}/q</h4>
                        <h5>{assignment.numofquestions} questions</h5>
                    </div>
                    <div className='assignment__status assignment__status--assigned'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/assigned.png`}  />
                        <h6 className=''>{assignment.status}</h6>
                    </div>
                    <div className='assignment__status assignment__status--rejected'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/rejected.png`}  />
                        <h6 className=''>{assignment.status}{assignment.progess} '/'{ assignment.numofquestions}</h6>
                    </div>
                    <div className='assignment__status assignment__status--completed'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/completed.png`}  />
                        <h6 className=''>{(assignment.progess!==100)?assignment.progess:null}{assignment.status}</h6>
                    </div>
                        <a className='assignment__button'>Continue</a>
                </div>
            );
        });
        return(
            <div className='levelbody'>
                <h3 className='top__heading'>Welcome Back, Nishta!</h3>
                <div className=' mainbody'>
                    <div className='col__left'>
                        <div className='col__left--box1'>
                            <div className='box1__left  col__primary'> 
                                <div className='papercircle papercircle--rd '>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/PaperFail.png`}  />
                                </div>
                                <div className='box1__left--text'> 
                                    <h3>See What's on pirority?</h3>
                                    <h4>Complete <mark>12 rejected questions</mark> to earn <mark>&#x20b9; 30/q</mark><mark></mark>&emsp;&emsp;<mark>&#8594;</mark></h4>
                                </div>
                            </div>
                            <div className='box1__right col__primary'>
                                <div className='papercircle papercircle--gr'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/PaperPlus.png`}  />
                                </div>
                                <div className='box1__right--text'> 
                                    <h3>New Task</h3>
                                    <h4>12&emsp;&emsp;<strong>&#8594;</strong></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col__left--box2 col__primary'>
                            <div className='box2__header'>
                                <h3 className='box2__header--top'>Complete tasks to start at Syllabify!</h3>
                                <div className='box2__header--bottom'>
                                    <h4>Select one to proceed</h4>
                                    <h3>View All</h3>
                                </div>
                            </div>
                            <hr/>
                            <h4 className='box2__date'>Wednesday:28 July 2021</h4>
                            <div className='box2__assignment'>
                                {assignments}
                                {/* <div className='assignment'>
                                    <div className='assignment__name'>
                                        <div className='assignment__name--logo'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/Password.png`}  />                 
                                        </div>
                                        <div className='assignment__name--topic'>
                                            <h5>Assignment #16</h5>
                                            <h4>Physics <mark>(IIT JEE)</mark></h4>    
                                        </div>
                                    </div>
                                    <div className='assignment__money'>
                                        <h4>&#x20b9; 25/q</h4>
                                        <h5>15 questions</h5>
                                    </div>
                                    <div className='assignment__status'>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/assigned.png`}  />
                                        <h6>Assigned</h6>
                                    </div>
                                     <a className='assignment__button'>Continue</a>
                                </div> */}
                            </div>
                        </div>
                        <div className='col__left--box3 col__primary'>
    
                        </div>
                    </div>
                    <div className='col__right col__primary'></div>
                </div>
            </div>
        );
        }
}
export default LevelBody;