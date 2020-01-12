// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const AnimationSkillComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: 3D Animation</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'> 3D Animation</p>
                <p>Currently on the team: </p>
                <p>- Kim (This is hope fully temporary, and i will leave, when better people joins)</p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>

                <p>3D animators has two main focus.</p>

                <p>1. Make Animations for Charecters and objects</p>
                <p>2. Make Prerenderd Cutscens</p>

                <p>you dont need to be able to do both, since this kategori likely will be slipt into two</p>
                <p>At a later point.</p>
                <p>But if you can do both, and feel like it. You are more then welcome  to work on both Focuses</p>
                <p>-</p>
                <p>Note: you will have a LOT of freedom, and you will be trusted that you know what you are doing.</p>
                <p>But it will need to be approved, in order to make the game coherent</p>
                <p>-</p>
                <p>This team is currently Empty, and there for your main coworker will be me. (kim)</p>
                <p>As more joins, you will be working with a team and a manager (or do you want to be the manager?)</p>
                <p>Eerything is Possible</p>
                <p>-</p>
               <p>Want to join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default AnimationSkillComponent