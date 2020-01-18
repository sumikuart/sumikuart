// Main:
import React, { useContext, useEffect } from 'react';

// Styles:
import './../profile.style.css'


// Image. 
import ProfilePicture from '../../../../../assets/team/felix.jpg';

const FelixProfileComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='profileComponentstyle'>

            <div className='headline'>
                <p>Profile</p>
            </div>

            <div className='underheadline'>
                <p>Welcome to Felix's profile  </p>
            </div>

            <div className='profileContent'>

                <div className = 'flex profileflexer'>

                    <div className = 'uppertextcontent'>
                        <div className = 'textInProfileData'>
                        <p className ='question' >Name:</p>
                        <p className = 'info'> Felix M. F. </p>
                        <p className ='question'>Age:</p>
                        <p className = 'info'> 22</p>
                        <p className ='question'>From:</p>
                        <p className = 'info'> Denmark </p>
                        <p className ='question'>Skills:</p>
                        <p className = 'info'> Web Programming - HTML, CSS (+SASS), Reac </p>
                        <p className = 'info'> Various Arts - Traditional drawing, painting, photoshop, crafting in a lot of different materials</p>
                        <p className = 'info'> Writing - Character sheets, short stories, moderate world-building</p>
                        <p className = 'info'> Music - Piano/Keyboard, drums, kind of rusty on guitar+bass</p>
                        <p className ='question'>Focus Area(s) in this Development:</p>
                        <p className = 'info'> Character/Object designer </p>
                        <p className = 'info'> Level designer </p>
                        <p className = 'info'> Writing</p>
                        <p className ='question'>Contact:</p>
                        <p className = 'info'> felixmisha1904@gmail.com </p>
                        </div>
                    </div>

                    <div className = 'upperimgcontent'>
                        <img src={ProfilePicture} alt=""/>
                    </div>
                </div>

                

                <div className = 'profileMeatText'>
                    <p className = 'profileHeadline'>Profile:</p>
                    <p className = 'profileText'> unsure, need help, haha  </p>
                </div>

            </div>
        </div>
    )

}

export default FelixProfileComponent