// Main:
import React, { useContext, useEffect } from 'react';

// Styles:
import './../profile.style.css'



const JakobProfileComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='profileComponentstyle'>

            <div className='headline'>
                <p>Profile</p>
            </div>

            <div className='underheadline'>
                <p>Welcome to Jakob's profile  </p>
            </div>

            <div className='profileContent'>

                <div className = 'flex profileflexer'>

                    <div className = 'uppertextcontent'>
                        <div className = 'textInProfileData'>
                        <p className ='question' >Name:</p>
                        <p className = 'info'>Jakob</p>
                        <p className ='question'>Joind:</p>
                        <p className = 'info'>14-01-2020</p>
                        <p className ='question'>Age:</p>
                        <p className = 'info'> 27</p>
                        <p className ='question'>From:</p>
                        <p className = 'info'> Denmark</p>
                        <p className ='question'>Skills:</p>
                        <p className = 'info'>Music Producer-Composer (FL Studio)</p>
                        <p className = 'info'>Web Programming (HTML, CSS, React, MongoDB)</p>
                        <p className ='question'>Focus Area(s) in this Development:</p>
                        <p className = 'info'>- Game sounds</p>
                        <p className = 'info'>- Recordings</p>
                        <p className = 'info'>- Music</p>
                        <p className ='question'>Contact:</p>
                        <p className = 'info'>yahkobproductions@gmail.com</p>
                        </div>
                    </div>

                    <div className = 'upperimgcontent'>
                        <img src={require('../../../../../assets/team/jakob.jpg')} alt=""/>
                    </div>
                </div>

                

                <div className = 'profileMeatText'>
                    <p className = 'profileHeadline'>Profile:</p>
                    <p className = 'profileText'>Comming Soon</p>
                </div>

            </div>
        </div>
    )

}

export default JakobProfileComponent