// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './about.style.css'

// Components
import ManegerComponent from './teamMangers/teamManeger.component';



const AboutComponent = () => {
    
    return (
        <div className='aboutstyle'>

            <div className='headline'>
                <p>About The Team</p>
            </div>

            <div className='underheadline'>
                <p>Here you will finde everything about the team</p>
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

            <div className='aboutTeamInfo'>
            <p className='smallHeadline'>About the team</p>

                <div className='content'>
                <p>Welcome to the Development Team. (well its not a team yet, as i am the only one here)</p>
                <p>This is a serious development team, put together with the goal of making the game: Kumik-3D (working title)</p>
                <p>More info on the game here:</p>
                <NavLink to='/story'>Story & Features</NavLink>
                <p> - </p>
                <p>Hopefully the Team will Grow, and evolve into a dedikated grupe of people</p>
                <p>Working as a team, and working as friends.</p>

                </div>


            </div>


            <div className='aboutTeamManagers'>
                <ManegerComponent />
            </div>

            <div className='aboutTeamList'>
                <p className='smallHeadline'>Team Lists:</p>

                <div className='flex teamContainer'>

                    <div>
                        
                <p className='teamCategory'>Story <span>(1)</span> :</p>
                <ul>
                    <li>Kim (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                    </div>

<div>
                <p className='teamCategory'>Concept Art<span>(1)</span>:  </p>
                <ul>
                    <li>Kim (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <p className='teamCategory'>Charecter Design<span>(1)</span>:</p>
                <ul>
                    <li>Kim  (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>
                <div>
                <p className='teamCategory'>3D Graphics<span>(1)</span>:</p>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <p className='teamCategory'>Programming<span>(1)</span>:</p>
                <ul>
                    <li>Kim (manager) (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>
                <div>
                <p className='teamCategory'>Animation<span>(1)</span>:</p>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>
                <div>
                <p className='teamCategory'>Music & Sound<span>(1)</span>:</p>
                <ul>
                    <li>Kim (<NavLink to='/about/profile/kim'>Info</NavLink>)</li>
                </ul>
                </div>

                <div>
                <p className='teamCategory'>Voice Acting<span>(1)</span>:</p>
                <ul>
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

        </div>  
    )

}

export default AboutComponent