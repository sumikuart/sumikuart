// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const AnimationSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: 3D Animation</p>
            </div>

            <div className='underheadline'>
                <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'> 3D Animation</p>
                <p>Currently on the team: </p>
                <NavLink to='/about/profile/kim'>- Kim (This is temporary, and i will leave, when other people joins, i will only be on this team, if no one else wants to)</NavLink>
                <p>Currently members need: Not Specified</p>
                <p>-</p>

                <p>3D animators has two main focus.</p>

                <p>1. Make Animations for Charecters and objects</p>
                <p>2. Make Prerenderd Cutscens</p>

                <p>you dont need to be able to do both, since this Category likely will be split into two</p>
                <p>At a later point.</p>
                <p>But if you can do both, and feel like it. You are more then welcome  to work on both Focuses</p>
                <p>-</p>
                <p>Note: you will have a LOT of freedom, and you will be trusted that you know what you are doing.</p>
                <p>But it will need to be approved, in order to make the game coherent</p>
                <p>-</p>
                <p>If you want to join, you will be working with a team and a manager (or do you want to be the manager?)</p>
                <p>Eerything is Possible</p>
                <p>-</p>
               <p>Want to join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default AnimationSkillComponent