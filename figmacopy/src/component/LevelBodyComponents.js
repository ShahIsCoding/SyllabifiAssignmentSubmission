import React,{Component} from 'react';
import {list} from '../shared/assignmentlist';
import { practicelist } from '../shared/practicelist';
import {rankinglist} from '../shared/rankinglist';
class LevelBody extends Component{ 
    
    constructor(props){
        super(props);
        this.state={
            box3_item1:true,
            box3_item2:false,
            box3_item3:false,
            box3_item4:false,
            user:{
                name:'Nishta',
                rank:1,
                xp:65357,
                subject:'Physics',
                money:255
            } 
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
                        <h6 className=''>{(assignment.progess!==100)?assignment.progess+'%':null}{assignment.status}</h6>
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
                            <h4>{this.state.user.subject} <mark className='exam'>(IIT JEE)</mark></h4>    
                        </div>
                    </div>
                    <div className='assignment__money'>
                        <h4>&#x20b9; {assignment.money}/q</h4>
                        <h5>{assignment.numofquestions} questions</h5>
                    </div>
 
                        {assignment_status(assignment)}

                        <a className='assignment__button'>Continue</a>
                </div>
            );
        });

        const practice = practicelist.subtopics.map((list) =>{
            return(
                <div className='b3__item'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${list.thumbnail}`}  />
                    <h6>{list.subheading}</h6>
             </div>
            );
        })

        const leaders = rankinglist.slice(0, 7).map((leader) =>{
            return(
                <div className='leaderboard--item'>
                    {
                        (leader.rank===1)?
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rank1.png`} className='leader--rank'/>
                        :
                        (leader.rank === 2)?
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rank2.png`} className='leader--rank'/>
                        :
                        (leader.rank === 3)?
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rank3.png`} className='leader--rank'/>
                        :
                        <div className='leader--rank'><h5>{leader.rank}</h5></div>
                    }
                    
                    <div className='leaderboard--item---Nameimg'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse29.png`}  className='leader--img'/>
                        <h5 className='leader--name'>{leader.name}</h5> 
                    </div>
                    <h5 className='leaderboard--item---points leader--xp'>{leader.xp} XP</h5>
                </div>
            );
        })
        return(
            <div className='levelbody'>
                <h3 className='welcomeheading'>Welcome Back, {this.state.user.name}!</h3>
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
                                                {practice}
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
                                            {practice}
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
                                    {practice}
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
                                    {practice}
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
                    <div className='col__right'>
                        <div className='col__right--BOX1 col__primary'>
                                <div className='col__right--BOX1---left '>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/coin.png`}  />
                                    <h4 className='div__header'>{this.state.user.money}</h4>
                                </div>
                                <h4 className='col__right--BOX1---right'>INR(&#x20b9;)</h4>

                        </div>
                        <div className='col__right--BOX2 col__primary'>

                        </div>
                        <div className='col__right--BOX3 col__primary'>
                            <h2 className='div__header'>LeaderBoard</h2>
                            <div className='leaderboard'>
                                {leaders}
                                <div className='leaderboard--item user'>
                                    {
                                        (this.state.user.rank===1)?
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rank1.png`} className='leader--rank'/>
                                        :
                                        (this.state.user.rank === 2)?
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rank2.png`} className='leader--rank'/>
                                        :
                                        (this.state.user.rank === 3)?
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icons/rank3.png`} className='leader--rank'/>
                                        :
                                        <div className='leader--rank'><h5>{this.state.user.rank}</h5></div>
                                    }
                                    <div className='leaderboard--item---Nameimg'>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/Ellipse29.png`}  className='leader--img'/>
                                        <h5 className='leader--name'>{this.state.user.name}</h5> 
                                    </div>
                                    <h5 className='leaderboard--item---points leader--xp'>65367 XP</h5>
                                </div> 
                            </div>
                            <a className='btn__whitepurple leaderboard--btn'> View all Ranking</a>
                        </div>
                        <div className='col__right--BOX4 col__primary'>
                            <h2 className='contact div__header'>Contact Us</h2>
                            <div className=' contact contact__phone'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/Call.png`}  className='contact__phone--call'/>
                                <div className='contact__phone--call '>
                                    <h5 className='contact__phone--call no1'>+91 9986 756 4364</h5>
                                    <h5 className='contact__phone--call no2'>020 - 27656769</h5>  
                                </div>
    
                            </div>
                            <div className='contact contact__mail'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/mail.png`}  className='contact__mail'/>
                                <h5>support@syllabify.com</h5>
                            </div>   
                            <div className='contact contact__followus'>
                                <h5>Follows Us</h5>
                                <div className='contact__followus--socialmedia'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/facebook.png`}  className='socialmediaicon'/>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/twitter.png`}  className='socialmediaicon'/>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/instagram.png`}  className='socialmediaicon'/>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/linkedin.png`}  className='socialmediaicon'/>
                                </div>
                             </div>    
                        </div>
                    </div>
                </div>
            </div>
        );
        }
}
export default LevelBody;