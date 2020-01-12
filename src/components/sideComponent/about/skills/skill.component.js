// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './skill.style.css'



const SkilComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill:</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Skill Name</p>
                <p>Description:</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default SkilComponent