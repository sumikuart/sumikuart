// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const NPCDesignerSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Charecter/Object Designer</p>
            </div>

            <div className='underheadline'>
                <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'> Charecter/Object Designer</p>
                <p>Currently on the team:</p>
                <NavLink to='/about/profile/kim'> - Kim (As manager) </NavLink>
                <NavLink to='/about/profile/felix'> - Felix </NavLink>
                <p>Currently members need: 1</p>
                <p>-</p>
                <p>This team's focus will be designing, Npcs and Objects for the world</p>
                <p>It's will Work very close to the Writing Team, so everything stays consistent</p>
                <p>-</p>
                <p>So are you a Creativ soul?</p>
                <p>And able to draw your ideas in a detailed way?</p>
                <p>Then you are what we are looking for!</p>
                <p>This will be a wounderful training ground in design for games</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default NPCDesignerSkillComponent