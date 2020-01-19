// Main:
import React, { useContext, useEffect } from 'react';

// Styles:
import './../profile.style.css'



const SumikuProfileComponent = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])


    return (
        <div className='profileComponentstyle'>

            <div className='headline'>
                <p>Profile</p>
            </div>

            <div className='underheadline'>
                <p>Welcome to Kim's profile  </p>
            </div>

            <div className='profileContent'>

                <div className = 'flex profileflexer'>

                    <div className = 'uppertextcontent'>
                        <div className = 'textInProfileData'>
                        <p className ='question' >Name:</p>
                        <p className = 'info'>Kim J. W.</p>
                        <p className ='question'>Joind:</p>
                        <p className = 'info'>22-12-2019</p>
                        <p className ='question'>Age:</p>
                        <p className = 'info'> 30 </p>
                        <p className ='question'>From:</p>
                        <p className = 'info'>Denmark</p>
                        <p className ='question'>Skills:</p>
                        <p className = 'info'>Web Programming (HTML, CSS, React, MongoDB)</p>
                        <p className = 'info'>Programmin principles (An understanding for the logic behind programming) </p>
                        <p className = 'info'>Drawing(Traditional & Photoshop) </p>
                        <p className = 'info'>3D Modeling(Blender) </p>
                        <p className = 'info'>Writing (World-Building, stories) </p>
                        <p className ='question'>Focus Area(s) in this Development:</p>
                        <p className = 'info'>Curretly:</p>
                        <p className = 'info'> - Everything, except Sound.</p>
                        <p className = 'info'>My Goal is to primary focus on:</p>
                        <p className = 'info'> - Mangement of the Project / Putting it all together.</p>
                        <p className = 'info'> - Programming</p>
                        <p className = 'info'> - Making and Refining, The Story and the Univers</p>
                        <p className = 'info'> - Design of Charecters, Artifacts and places. </p>
                        <p className = 'info'> I hope to Share these Focus points with others. (more people on one subject can make it better)</p>
                        <p className ='question'>Contact:</p>
                        <p className = 'info'>sumikuartofficial@gmail.com</p>
                        </div>
                    </div>

                    <div className = 'upperimgcontent'>
                        <img src={require('../../../../../assets/team/sumiku.jpg')} alt=""/>
                    </div>
                </div>

                

                <div className = 'profileMeatText'>
                    <p className = 'profileHeadline'>Profile:</p>
                    <p className = 'profileText'>Welcome!</p>
                    <p className = 'profileText'>Im am the Founder of this Project, i have always wished to use my creativity to program, and make games.</p>
                    <p className = 'profileText'>So i startet out as a Web Developer, in order to get the feel of how things work. </p>
                    <p className = 'profileText'>And now that my Web Development education is about to end, i have decisede to take the leep.</p>
                    <p className = 'profileText'>Hopefully, that means that i can start at a Game Development Programming school, later this year.</p>
                    <p className = 'profileText'>-----</p>
                    <p className = 'profileText'>But since i Enjoy working on projects and programming, i deciedet to make.. THIS</p>
                    <p className = 'profileText'>Kumik 3D (working title), Will be a Big and exciting project, for everyone involved</p>
                    <p className = 'profileText'>My Goal is to have this running Parallel with my Game Developments education. </p>
                    <p className = 'profileText'>And in the end, hopefully we can make this a Project come true</p>
    
                </div>

            </div>
        </div>
    )

}

export default SumikuProfileComponent