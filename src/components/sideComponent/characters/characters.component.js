// Main:
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Styles:
import './characters.style.css'




const CharacterComponent = () => {

    return (
        <div className='characterStyle'>

            <div className='headline'>
                <p>The Characters</p>
            </div>

            <div className='underheadline'>
                <p>Here you will finde info about characters as they are developed (Warning: light spoilers)</p>
            </div>

            <div className='charecterSelectContent'>

                <p className='smallHeadline topper'> NPC's</p>

                <p className='charecterTitle'>Miko's</p>
                <p className='charecterDescription'>A Groupe of people, one for each god. who has been granted special powers</p>
                <div className='groupeMiko flex'>

                    <div className='npcContainer'>
                        <NavLink to='/characters/nemo'>
                            <img src={require('../../../assets/charecters/nemo/nemoSelect.png')} alt="Nemo Kurai" />
                      
                        <p className='npcContainerName' >Nemo Kurai</p>
                        </NavLink>
                    </div>


                </div>

            </div>

        </div>
    )

}

export default CharacterComponent