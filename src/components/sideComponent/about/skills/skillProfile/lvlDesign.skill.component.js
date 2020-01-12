// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const LevelDesignerSkillComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: Level Designer</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>Level Designer</p>
                <p>Currently on the team:</p>
                <p>- Kim (This is hope fully temporary, and i will leave, when better people joins)</p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>Do you want to help, making this world come to life?</p>
                <p>Do you want to design clever levels, and environments?</p>
                <p>-</p>
                <p>We Need someone, with a good feeling for design.</p>
                <p>And one to make every room feel like it belongs, in the world.</p>
                <p>And make every environment feel like a extention of its owner</p>
                <p>-</p>
                <p>Note: you will have a LOT of freedom, in the design, and more.</p>
                <p>But it will need to be approved, in order to make the game coherent</p>
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

export default LevelDesignerSkillComponent