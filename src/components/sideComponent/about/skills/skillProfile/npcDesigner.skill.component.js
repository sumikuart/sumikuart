// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const NPCDesignerSkillComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Charecter/Object Designer</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'> Charecter/Object Designer</p>
                <p>Currently on the team:</p>
                <p> - Kim (As manager) </p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>This team's focus will be designing, Npcs and Objects for the world</p>
                <p>It's will Work very close to the Writing Team, so everything stays consistent</p>
                <p>-</p>
                <p>So are you a Creativ soul?</p>
                <p>And able to draw you ideas in a detailed a beautiful way?</p>
                <p>Then you are what we are looking for!</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default NPCDesignerSkillComponent