// Main:
import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './../skill.style.css'



const ModelSkillComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='skilStyle'>

            <div className='headline'>
                <p>Skill: 3D Modeling</p>
            </div>

            <div className='underheadline'>
                <p>Everything you need to know about this Team</p>
            </div>

            <div className='skillContent'> 
                <p className='smallHeadline'>3D Modeling</p>
                <p>Currently on the team:</p>
                <NavLink to='/about/profile/kim'>- Kim (This is temporary, and i will leave, when better people joins)</NavLink>
                <NavLink to='/about/profile/felix'>- Felix (I have no experience but it sounds fun)</NavLink>
                <p>Currently members need: Not Specified</p>
                <p>-</p>
                <p>Do you like to Model and sculpture, in the wounderfull land of 3D?</p>
                <p>Then this Project needs people like you!</p>
                <p>you can be challenged in arears as the following:</p>
                <p>1. Charecter Models (Designed by our Charecter Design team).</p>
                <p>2. Object/ Artifact Models. (Designed by our Charecter Design team)</p>
                <p>3. Environments (Designed by our level design team)</p>
                <p>-</p>
                <p>If you want to join, you will be working with a team and a manager (or do you want to be the manager?)</p>
                <p>Eerything is Possible</p>
                <p>-</p>
                <p>Want to Join?</p>
                <NavLink to='/contact'>Click here, to go to or contact form</NavLink>
            </div>

        </div>
    )

}

export default ModelSkillComponent