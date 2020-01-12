// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const WritingSkillComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Writing</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Writing</p>
                <p>Currently on the team:</p>
                <p>- Kim (As manager) </p>
                <p>Currently members need: Max 2 open spots</p>
                <p>-</p>
                <p>The Writing of the Project is very importent</p>
                <p>I have a Vision and a rough story, and need help to the following:</p>
                <p>- Make evey NPC more Uniq, give them life, and as much info as possible to make them real</p>
                <p>- Complete the Story, and make it the best version of it self</p>
                <p>- a team the can give feedback, on the writing</p>
                <p>- Write Dialog</p>
                <p>-</p>
                <p>The Base idea is mine, but toghter we can evolve it!</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default WritingSkillComponent