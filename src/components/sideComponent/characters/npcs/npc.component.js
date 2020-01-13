// Main:
import React, { useContext, useEffect } from 'react';

// Styles:
import './npc.style.css'



const NPCComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    
    return (
        <div className='npcStyle'>

            <div className='headline'>
                <p>NPC: -name- </p>
            </div>

            <div className='underheadline'>
                <p>Title</p>
            </div>

        </div>
    )

}

export default NPCComponent