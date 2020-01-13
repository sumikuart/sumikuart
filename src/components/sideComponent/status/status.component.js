// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './status.style.css'



const StatusComponent = () => {

    return (
        <div className='statusStyle'>

            <div className='headline'>
                <p>Status</p>
            </div>

            <div className='underheadline'>
                <p>An overview of what is currently in fokus, and what has been done in the past</p>
            </div>

{/* ------------------------------------------------------------------------------------------------------------------In Focus */}
            <div className='statusprimecontent'>
                <p className='smallHeadline'>In Focus</p>
                <div className='masterStatusDiv overview'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p>Name:</p> </div>
                        <div className='statusDate'>  <p>Start - Updated:</p></div>
                        <div className='statusPerson'> <p>Primarily Responsible</p></div>
                        <div className='StatusDone'>  <p>Focus Level</p></div>
                    </div>
                </div>



                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p>Make the V1.0 games Website and get it online</p> </div>
                        <div className='statusDate'> <p>06-01-2020 - 11-01-2020</p></div>
                        <div className='statusPerson'> <NavLink to='/about/profile/kim'>Kim</NavLink></div>
                        <div className='StatusDone focus'>  <p>High Focus</p></div>
                    </div>
                </div>

                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p>Get more people to join the Team/project</p> </div>
                        <div className='statusDate'> <p>06-01-2020 - 08-01-2020 </p></div>
                        <div className='statusPerson'> <NavLink to='/about/profile/kim'>Kim</NavLink></div>
                        <div className='StatusDone medium'>  <p>Medium Focus</p></div>
                    </div>
                </div>

                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p> Make Nemo Kurai Npc 3D model in blender</p> </div>
                        <div className='statusDate'> <p>22-12-2019 - 05-01-2020</p></div>
                        <div className='statusPerson'> <NavLink to='/about/profile/kim'>Kim</NavLink></div>
                        <div className='StatusDone low'>  <p>Low Focus</p></div>
                    </div>
                </div>

                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p> Make Nemo Kurai's Music Theme</p> </div>
                        <div className='statusDate'> <p>13-01-2020 - xx-xx-2020</p></div>
                        <div className='statusPerson'><NavLink to='/about/profile/jakob'>Jakob</NavLink></div>
                        <div className='StatusDone focus'>  <p>High Focus</p></div>
                    </div>
                </div>



                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv firstStatus'></div>
                    <div className='textStatusDiv '>
                        <div className='statusTitle'> <p>WRITE MORE NOTES!!!</p> </div>
                        <div className='statusDate'> <p>06-12-2019 - 08-01-2020</p></div>
                        <div className='statusPerson'><NavLink to='/about/profile/kim'>Kim</NavLink></div>
                        <div className='StatusDone low'>  <p>Low Focus</p></div>
                    </div>
                </div>
            </div>

{/* ------------------------------------------------------------------------------------------------------------------Historie */}
            <div className='statusprimecontent'>
            <p className='smallHeadline'>History</p>
                <div className='masterStatusDiv overview'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p>Name:</p> </div>
                        <div className='statusDate'>  <p>Start - Done:</p></div>
                        <div className='statusPerson'> <p>Primarily Responsible</p></div>
                        <div className='StatusDone'>  <p>Focus Level</p></div>
                    </div>
                </div>

                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p>Get the idea for the game Kumik-3D(Working title)</p> </div>
                        <div className='statusDate'> <p>??-??-20?? - ??-??-20??</p></div>
                        <div className='statusPerson'><NavLink to='/about/profile/kim'>Kim</NavLink></div>
                        <div className='StatusDone done'>  <p>DONE</p></div>
                    </div>
                </div>



                <div className='masterStatusDiv'>
                    <div className='visualStatusDiv firstStatus'></div>
                    <div className='textStatusDiv'>
                        <div className='statusTitle'> <p>Start Drawing and design Npc's for unspecefied game</p> </div>
                        <div className='statusDate'> <p>14-02-2004 - NEVER</p></div>
                        <div className='statusPerson'><NavLink to='/about/profile/kim'>Kim</NavLink></div>
                        <div className='StatusDone done'>  <p>DONE</p></div>
                    </div>
                </div>


            </div>

        </div>
    )

}

export default StatusComponent