// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const ProgrammingSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Programming</p>
            </div>

            <div className='underheadline'>
                <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Programming</p>
                <p>Currently on the team:</p>
                <NavLink to='/about/profile/kim'> - Kim (As manager) </NavLink>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>So this is the main focus for me (Kim).</p>
                <p>I made this project to have a platform to pratice and refine my programming skills</p>
                <p>Another important thing is to work in teams</p>
                <p>So do you want to code with me? and work on a larger project?</p>
                <p>Then please join the project</p>
                <p>-</p>
                <p> We will be programming in:</p>
                <p>-C#</p>
                <p>-C++</p>
                <p>-Java</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default ProgrammingSkillComponent