import React,{Component} from 'react';
import {list} from '../shared/assignmentlist';
class LevelBody extends Component{ 
    
    constructor(props){
        super(props);
        this.state={
            box3_item1:true,
            box3_item2:false,
            box3_item3:false,
            box3_item4:false 
        }
        this.toggleItem1= this.toggleItem1.bind(this);
        this.toggleItem2= this.toggleItem2.bind(this);
        this.toggleItem3= this.toggleItem3.bind(this);
        this.toggleItem4= this.toggleItem4.bind(this);
    }

    toggleItem1() {
        if(this.state.box3_item1) this.toggleItem2();
        else{
            this.setState({
                box3_item2:false,
                box3_item3:false,
                box3_item4:false 
            })
        }
        this.setState({
          box3_item1:!this.state.box3_item1,
        });

    };
    toggleItem2() {
        if(this.state.box3_item2) this.toggleItem3();
        else{
            this.setState({
                box3_item1:false,
                box3_item3:false,
                box3_item4:false 
            });
        }
        this.setState({
            box3_item2:!this.state.box3_item2
        });

    };
    toggleItem3() {
        if(this.state.box3_item3) this.toggleItem4();
        else{
            this.setState({
                box3_item1:false,
                box3_item2:false,
                box3_item4:false 
            });
        }
        this.setState({
          box3_item3:!this.state.box3_item3
        });
    };
    toggleItem4() {
        if(this.state.box3_item4) this.toggleItem1();
        else{
            this.setState({
                box3_item2:false,
                box3_item3:false,
                box3_item1:false 
            });
        }
        this.setState({
          box3_item4:!this.state.box3_item4
        });
    };

    render(){

        const assignment_status = (assignment) =>{
            if(assignment.status==='Assigned'){
                return(
                    <div className='assignment__status assignment__status--assigned'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/assigned.png`}  />
                        <h6 className=''>{assignment.status}</h6>
                    </div>
                );
            }
            else if(assignment.status === 'Rejected'){
                return(
                    <div className='assignment__status assignment__status--rejected'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rejected.png`}  />
                        <h6 className=''>{assignment.status}{assignment.progess}/{ assignment.numofquestions}</h6>
                    </div>                  
                );
            }
            else{
                return(
                    <div className='assignment__status assignment__status--completed'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/completed.png`}  />
                        <h6 className=''>{(assignment.progess!==100)?assignment.progess:null}{assignment.status}</h6>
                    </div>
                );
            }
        };
        const assignments = list.map((assignment) =>{
            return(
                <div className='assignment'>
                    <div className='assignment__name'>
                        <div className='assignment__name--logo'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Password.png`}  />                 
                        </div>
                        <div className='assignment__name--topic'>
                            <h5>Assignment #{assignment.number}</h5>
                            <h4>Physics <mark className='exam'>(IIT JEE)</mark></h4>    
                        </div>
                    </div>
                    <div className='assignment__money'>
                        <h4>&#x20b9; {assignment.money}/q</h4>
                        <h5>{assignment.numofquestions} questions</h5>
                    </div>
                    <div>
                        {assignment_status(assignment)}
                    </div>
                        <a className='assignment__button'>Continue</a>
                </div>
            );
        });


        return(
            <div className='levelbody'>
                <h3 className='welcomeheading'>Welcome Back, Nishta!</h3>
                <div className='mainbody columns'>
                    <div className='col__left'>
                        <div className='col__left--box1'>
                            <div className='box1__left  col__primary'> 
                                <div className='papercircle papercircle--rd '>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/PaperFail.png`}  />
                                </div>
                                <div className='box1__left--text'> 
                                    <h3 className='div__header'>See What's on pirority?</h3>
                                    <h4>Complete <mark>12 rejected questions</mark> to earn <mark>&#x20b9; 30/q</mark><mark></mark>&emsp;&emsp;<mark>&#8594;</mark></h4>
                                </div>
                            </div>
                            <div className='box1__right col__primary'>
                                <div className='papercircle papercircle--gr'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/PaperPlus.png`}  />
                                </div>
                                <div className='box1__right--text'> 
                                    <h3>New Task</h3>
                                    <h4>12&emsp;&emsp;<strong>&#8594;</strong></h4>
                                </div>
                            </div>
                        </div>


                        <div className='col__left--box2 col__primary'>
                            <div className='box2__header'>
                                <h3 className='box2__header--top div__header'>Complete tasks to start at Syllabify!</h3>
                                <div className='box2__header--bottom'>
                                    <h4>Select one to proceed</h4>
                                    <h3>View All</h3>
                                </div>
                            </div>
                            <hr/>
                            <h4 className='box2__date'>Wednesday:28 July 2021</h4>
                            <div className='box2__assignment'>
                                {assignments}
                            </div>
                        </div>


                        <div className='col__left--box3 col__primary'>
                            <div className='box3__header'>
                                <h3 className='div__header'>Best Practices</h3>
                            </div> 
                            <div className='box3__body'>
                                {(this.state.box3_item1)?

                                        <div className='box3__body--items'>
                                            <div className='b3__item--header'>
                                                <h4 >Tips for Meta-tagging solutions</h4>
                                                <div onClick={this.toggleItem1}>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/minus.png`}  />
                                                </div>
                                            </div>
                                            <div className='b3__item--body'>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/video1.png`}  />
                                                    <h6>How does Meta-tagging work?</h6>
                                                </div>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item2.png`}  />
                                                    <h6>Strategies to something</h6>
                                                </div>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item3.png`}  />
                                                    <h6>Tips and ticks for Meta-tagging</h6>
                                                </div>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item4.png`}  />
                                                    <h6>Earn more with Meta-tagging</h6>
                                                </div>
                                            </div>
                                            
                                        </div>

                                :
                                    <div className='collapsed'>
                                        <div className='b3__item--header'>
                                            <h4 >Tips for Meta-tagging solutions</h4>
                                            <div onClick={this.toggleItem1}>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/plus.png`}  />
                                            </div>
                                        </div>   
                                    </div>
                                }
                                {(this.state.box3_item2)?

                                        <div className='box3__body--items'>
                                            <div className='collapsed'>
                                                <div className='b3__item--header'>
                                                    <h4 >Tips for Solving Questions</h4>
                                                    <div onClick={this.toggleItem2}>
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/minus.png`}  />
                                                    </div>
                                                </div>   
                                            </div>
                                            <div className='b3__item--body'>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/video1.png`}  />
                                                    <h6>How does Meta-tagging work?</h6>
                                                </div>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item2.png`}  />
                                                    <h6>Strategies to something</h6>
                                                </div>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item3.png`}  />
                                                    <h6>Tips and ticks for Meta-tagging</h6>
                                                </div>
                                                <div className='b3__item'>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item4.png`}  />
                                                    <h6>Earn more with Meta-tagging</h6>
                                                </div>
                                            </div>
                                            
                                        </div>

                                :
                                    <div className='collapsed'>
                                        <div className='b3__item--header'>
                                            <h4 >Tips for Solving Questions</h4>
                                            <div onClick={this.toggleItem2}>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/plus.png`}  />
                                            </div>
                                        </div>   
                                    </div>
                                }

                                {(this.state.box3_item3)?

                                <div className='box3__body--items'>
                                    <div className='b3__item--header'>
                                        <h4 >Strategies for finding error</h4>
                                        <div onClick={this.toggleItem3}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/minus.png`}  />
                                        </div>
                                    </div>
                                    <div className='b3__item--body'>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/video1.png`}  />
                                            <h6>How does Meta-tagging work?</h6>
                                        </div>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item2.png`}  />
                                            <h6>Strategies to something</h6>
                                        </div>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item3.png`}  />
                                            <h6>Tips and ticks for Meta-tagging</h6>
                                        </div>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item4.png`}  />
                                            <h6>Earn more with Meta-tagging</h6>
                                        </div>
                                    </div>
                                    
                                </div>

                                :
                                <div className='collapsed'>
                                <div className='b3__item--header'>
                                    <h4 >Strategies for finding error</h4>
                                    <div onClick={this.toggleItem3}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/plus.png`}  />
                                    </div>
                                </div>   
                                </div>
                                }
                                {(this.state.box3_item4)?

                                <div className='box3__body--items'>
                                    <div className='b3__item--header'>
                                        <h4> How to make Vidoe Solutions</h4>
                                        <div onClick={this.toggleItem4}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/minus.png`}  />
                                        </div>
                                    </div>
                                    <div className='b3__item--body'>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/video1.png`}  />
                                            <h6>How does Meta-tagging work?</h6>
                                        </div>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item2.png`}  />
                                            <h6>Strategies to something</h6>
                                        </div>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item3.png`}  />
                                            <h6>Tips and ticks for Meta-tagging</h6>
                                        </div>
                                        <div className='b3__item'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/box3Item4.png`}  />
                                            <h6>Earn more with Meta-tagging</h6>
                                        </div>
                                    </div>
                                    
                                </div>

                                :
                                <div className='collapsed'>
                                <div className='b3__item--header'>
                                    <h4 >How to make Vidoe Solutions</h4>
                                    <div onClick={this.toggleItem4}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/plus.png`}  />
                                    </div>
                                </div>   
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col__right col__primary'></div>
                </div>
            </div>
        );
        }
}
export default LevelBody;