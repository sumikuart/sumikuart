// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const SoundSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Music & Sound</p>
            </div>

            <div className='underheadline'>
                <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Music & Sound</p>
                <p>Currently on the team:</p>
                <NavLink to='/about/profile/jakob'> - Jakob (As manager) </NavLink>
                <p>- Kim (Only here to give Opinions)</p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>Are you handy with making music?</p>
                <p>or do you like to make the sound just right?</p>
                <p>Then we are looking for you!</p>
                <p>-</p>
                <p>If you want to join, you will be working with a team and a manager (Manager: Jakob)</p>
                <p>Eerything is Possible</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default SoundSkillComponent