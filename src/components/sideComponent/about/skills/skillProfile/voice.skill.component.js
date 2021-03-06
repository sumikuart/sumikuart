// Main:
import React, { useContex, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const VoiceSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Voice Acting</p>
            </div>

            <div className='underheadline'>
            <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Voice Acting</p>
                <p>Currently on the team:</p>
                <NavLink to='/about/profile/jakob'> - Jakob (As manager) </NavLink>
                <p>- Kim (currently unassigned)</p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>Do you want to make our charecters come to live?</p>
                <p>you will be able to customice the sound of you charecter, and help write there lines</p>
                <p>-</p>
                <p>This team is currently Need more members. As i can't do alle the males, and none of the females</p>
                <p>As more joins, you will be working with a team and a manager (or do you want to be the manager?)</p>
                <p>Eerything is Possible</p>
                <p>-</p>
                <p>Chareters that Still needs a voice:</p>
                <p>Narrator</p>
                <p>Nemo Kurai</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default VoiceSkillComponent