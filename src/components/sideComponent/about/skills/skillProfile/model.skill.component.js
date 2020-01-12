// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const ModelSkillComponent = () => {
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: 3D Modeling</p>
            </div>

            <div className='underheadline'>
                <p>EveryThing you need to know about this skill</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>3D Modeling</p>
                <p>Currently on the team:</p>
                <p>- Kim (This is hope fully temporary, and i will leave, when better people joins)</p>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>Do you like to Model and sculpture, in the wounderfull land of 3D?</p>
                <p>The Project needs people like you!</p>
                <p>you can be challenged in arears as the following:</p>
                <p>1. Charecter Models (Designed by our Charecter Design team).</p>
                <p>2. Object/ Artifact Models. (Designed by our Charecter Design team)</p>
                <p>3. Environments (Designed by our level design team)</p>
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

export default ModelSkillComponent