// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const WritingSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Writing</p>
            </div>

            <div className='underheadline'>
                <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Writing</p>
                <p>Currently on the team:</p>
                <NavLink to='/about/profile/felix'>- Felix </NavLink>
                <NavLink to='/about/profile/kim'>- Kim </NavLink>

                <p>Currently members need(at this point): 1</p>

                <p>-</p>
                <p>The Writing of the Project is very importent</p>
                <p>We have a Vision and a rough story, and need help to the following:</p>
                <p>- Make evey NPC more Uniq, give them life, and as much info as possible to make them real</p>
                <p>- Make Lore, and expand the world</p>
                <p>- Complete the Story, and make it the best version of it self</p>
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