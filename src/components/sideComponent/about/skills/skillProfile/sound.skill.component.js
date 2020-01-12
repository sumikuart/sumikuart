// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const SoundSkillComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Music & Sound</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Music & Sound</p>
                <p>Currently on the team:</p>
                <p>- Kim (This is hope fully temporary, and i will leave, when better people joins)</p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>Are you handy with making music?</p>
                <p>or do you like to make the sound just right?</p>
                <p>Then we are looking for you!</p>
                <p>-</p>
                <p>This team is currently Empty, and there for your main coworker will be me. (kim)</p>
                <p>As more joins, you will be working with a team and a manager (or do you want to be the manager?)</p>
                <p>Eerything is Possible</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default SoundSkillComponent