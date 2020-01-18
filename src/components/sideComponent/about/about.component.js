// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './about.style.css'

// Components
import ManegerComponent from './teamMangers/teamManeger.component';

// img:
import sumikuFace from '../../../assets/team/sumiku.jpg' 


const AboutComponent = () => {
    
    return (
        <div className='aboutstyle'>

            <div className='headline'>
                <p>About Us</p>
            </div>

            <div className='underheadline'>
                <p>Here you will finde everything about the team</p>
            </div>

           

            <div className='aboutTeamInfo'>

                <div className='content'>
                <p className='smallHeadline'>About the team</p>
                    <p>Welcome to the Development Team.</p>
                    <div>
                        <img src={sumikuFace} alt=""/>
                    </div>
                    <p>We are a serious development team, put together with the goal of making the game:</p>
                    <NavLink to='/story'>Kumik-3D (working title)</NavLink>
                    <p> - </p>
                    <p>As of now, we are currently three people on the project</p>
                    <p>Find our profiles below.</p>
                    <p> - </p>
                    <p>We are diffrent teams, working toghether on our passion, in order to make the best game we can.</p>
                    <p> - </p>
                    <p>Please Note, that this a project for people to train and evolve in.</p>


                </div>


            </div>

            <div className='aboutTeamNotice'>
                <p className='smallHeadline'>People Wanted:</p>
                <p>!!!! This is a Practice Project, witch mean that it's about evolving our skills, not about being the best !!!!</p>
                <p>We need people with the following skills:</p>
                <p>Or people who want to get better at  the following skills:</p>
                <p className='aboutObs'>Click on a skill, to learn more about our needs</p>

                <ul>
                        <li><NavLink to='/skill/writing'>Writing story and dialog</NavLink></li>
                        <li><NavLink to='/skill/programming'>Programming (C++ C# and Java)</NavLink></li>
                        <li><NavLink to='/skill/npcdesigner'> Charecter/Object Designer</NavLink></li>
                        <li><NavLink to='/skill/model'>3D modeling</NavLink></li>
                        <li><NavLink to='/skill/animation'>3D Animation</NavLink></li>
                        <li><NavLink to='/skill/lvldesign'>Level Designer</NavLink></li>
                        <li><NavLink to='/skill/sound'>Music and Sound</NavLink></li>
                        <li><NavLink to='/skill/voice'>Voice Acting</NavLink></li>
                    </ul>

                <p>Please contact us if you have questions or are intressted:</p>
                <p>you can applay for as many teams as you want</p>

                <NavLink to='/contact'>Contact</NavLink>
            </div>

            <div className='aboutTeamList'>
                <p className='smallHeadline'>Team Lists:</p>
                <p className='moreinfoTeams'>Click on the team name for more info</p>

                <div className='flex teamContainer'>

                    <div>
                        
                <NavLink to='/skill/writing' className='teamCategory'> Writing <span>(2)</span> :</NavLink>
                <ul>
                    <li>Felix (<NavLink to='/about/profile/felix'>Info</NavLink>)</li>
                    <li>Kim (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                    </div>

                <div>
                <NavLink to='/skill/npcdesigner' className='teamCategory'>NPC, World & Object Design<span>(2)</span>:  </NavLink>
                <ul>
                    <li>Felix (<NavLink to='/about/profile/felix'>Info</NavLink>)</li>
                    <li>Kim (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <NavLink to='/skill/model' className='teamCategory'>3D Graphics<span>(1)</span>:</NavLink>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>


                <div>
                <NavLink to='/skill/lvldesign' className='teamCategory'>3D Levels<span>(1)</span>:</NavLink>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <NavLink to='/skill/programming' className='teamCategory'>Programming<span>(1)</span>:</NavLink>
                <ul>
                    <li>Kim (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>
                <div>
                <NavLink to='/skill/animation' className='teamCategory'>Animation<span>(1)</span>:</NavLink>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>
                <div>
                <NavLink to='/skill/sound' className='teamCategory'>Music & Sound<span>(2)</span>:</NavLink>
                <ul>
                    <li>Jakob  (manager) (<NavLink to='/about/profile/jakob'>Info</NavLink>)</li>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <NavLink to='/skill/voice' className='teamCategory'>Voice Acting<span>(2)</span>:</NavLink>
                <ul>
                    <li>Jakob  (manager) (<NavLink to='/about/profile/jakob'>Info</NavLink>)</li>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <p className='teamCategory'>Web Master<span>(1)</span>:</p>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>


                </div>



            </div>


            <div className='aboutTeamManagers'>
                <ManegerComponent />
            </div>

         
        </div>  
    )

}

export default AboutComponent