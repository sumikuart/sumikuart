// Main:
import React, { useContext, useEffect } from 'react';

// Styles:
import './profile.style.css'



const ProfileComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='profileComponentstyle'>

            <div className='headline'>
                <p>Profile</p>
            </div>

            <div className='underheadline'>
                <p>Welcome to -name- profile  </p>
            </div>

            <div className='profileContent'>

                <div className = 'flex profileflexer'>

                    <div className = 'uppertextcontent'>
                        <div className = 'textInProfileData'>
                        <p className ='question' >Name:</p>
                        <p className = 'info'>-Name-</p>
                        <p className ='question'>Joind:</p>
                        <p className = 'info'>-date-</p>
                        <p className ='question'>Age:</p>
                        <p className = 'info'> -Age-</p>
                        <p className ='question'>From:</p>
                        <p className = 'info'> -from-</p>
                        <p className ='question'>Skills:</p>
                        <p className = 'info'>-Skills-</p>
                        <p className ='question'>Focus Area(s) in this Development:</p>
                        <p className = 'info'>-Focus-</p>         
                        <p className ='question'>Contact:</p>
                        <p className = 'info'>-Contact-</p>
                        </div>
                    </div>

                    <div className = 'upperimgcontent'>
                        <img src={require('../../../../assets/team/unknown.jpg')} alt=""/>
                    </div>
                </div>

                

                <div className = 'profileMeatText'>
                    <p className = 'profileHeadline'>Profile:</p>
                    <p className = 'profileText'>-Profile Text-</p>
                </div>

            </div>
        </div>
    )

}

export default ProfileComponent