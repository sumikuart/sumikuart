// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './synopsis.style.css'


// Current High Array number to hide spoilers: 8
const SynopsisComponent = () => {

// OBS: lav et name del af dette array og brug det til at lave Navigation med.
    const [spoilerContent, setSpoilerContent] = useState([{status:'hide'}, {status:'hide'}, {status:'hide'}, {status:'hide'},  {status:'hide'},{status:'hide'},{status:'hide'},{status:'hide'},{status:'hide'}])

    const showSpoiler = (e) => {

        var chosenSpoiler=e.target.dataset.spoilerid;
        console.log(chosenSpoiler)

        let newStatus = [...spoilerContent]

        if ( newStatus[chosenSpoiler].status ==='show'  ) {
            newStatus[chosenSpoiler].status = 'hide'
        } else {
            newStatus[chosenSpoiler].status = 'show'
        }
        
        setSpoilerContent(newStatus)
        


        
    }

    return (
        <div className='synpsisStyle' id='synopsisTop'>

            <div className='headline'>
                <p>Story & Features</p>
            </div>

            <div className='underheadline'>
                <p>Here you will find info about the game and whats its about</p>
            </div>

            <div className='ScrollerNavContent'>

               <p>Navigation:</p>

                 <ul>
                    <li><a href='#top'> top </a></li>
                </ul>

                <p>Story:</p>

                <ul>
                    <li><a href='#spoiler0'> test </a></li>
                    <li><a href='#spoiler1'> test </a></li>
                    <li><a href='#spoiler2'> test </a></li>
                    <li><a href='#spoiler3'> test </a></li>
                </ul>

                <p>Features:</p>

                    <ul>
                        <li><a href='#spoiler4'>Dynamic NPC behavior</a></li>
                        <li><a href='#spoiler5'>a non status-quo world </a></li>
                        <li><a href='#spoiler6'>Chose your way </a></li>
                        <li><a href='#spoiler7'>Rich Story </a></li>
                        <li><a href='#spoiler8'>Combat system</a></li>
                    </ul>

            </div>

            <div className='storyContent'>
                <p className='smallHeadline'> Story</p>

                <div className='groupeContent' id='spoiler0'>
                    <p className={'spoilerHeadline ' + spoilerContent[0].status} data-spoilerid='0' onClick={showSpoiler}>hej 0</p>
                    <div className={'Spoilers ' +spoilerContent[0].status} data-spoilerid='0'> 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione atque ab nam, incidunt, consectetur cum corrupti consequuntur expedita ea, adipisci itaque neque commodi nesciunt? Provident harum eligendi aperiam exercitationem.
                    </div>
                </div>

                <div className='groupeContent' id='spoiler1'>
                    <p className={'spoilerHeadline ' +spoilerContent[1].status} data-spoilerid='1' onClick={showSpoiler}>hej 1</p>
                    <div className={'Spoilers ' +spoilerContent[1].status} data-spoilerid='1'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione atque ab nam, incidunt, consectetur cum corrupti consequuntur expedita ea, adipisci itaque neque commodi nesciunt? Provident harum eligendi aperiam exercitationem.
                    
                    </div>
                </div>

                <div className='groupeContent' id='spoiler2'>
                    <p className={'spoilerHeadline ' +spoilerContent[2].status} data-spoilerid='2' onClick={showSpoiler}>hej 2</p>
                    <div className={'Spoilers ' +spoilerContent[2].status} data-spoilerid='2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione atque ab nam, incidunt, consectetur cum corrupti consequuntur expedita ea, adipisci itaque neque commodi nesciunt? Provident harum eligendi aperiam exercitationem.
                    
                    </div>
                </div>


                <div className='groupeContent' id='spoiler3'>
                    <p className={'spoilerHeadline ' +spoilerContent[3].status} data-spoilerid='3' onClick={showSpoiler}>hej 3</p>
                    <div className={'Spoilers ' +spoilerContent[3].status} data-spoilerid='3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione atque ab nam, incidunt, consectetur cum corrupti consequuntur expedita ea, adipisci itaque neque commodi nesciunt? Provident harum eligendi aperiam exercitationem.
                    
                    </div>
                </div>



            </div>

            <div className='featuresContent'>
                <p className='smallHeadline'> Features</p>

                <div className='groupeContent' id='spoiler4'>
                    <p className={'spoilerHeadline ' +spoilerContent[4].status} data-spoilerid='4' onClick={showSpoiler}>Dynamic NPC behavior</p>
                    <div className={'Spoilers ' +spoilerContent[4].status} data-spoilerid='4'>
                        A Social System, that allows NPC's to move and act on a daily randomized rutine, 
                        based on: mood, personality, relations and in-game events.
                        If two NPC's meets in this rutine, there relationship changes, for better or worse.
                    </div>
                </div>

                <div className='groupeContent' id='spoiler5'>
                    <p className={'spoilerHeadline ' +spoilerContent[5].status} data-spoilerid='5' onClick={showSpoiler}>a non status-quo world</p>
                    <div className={'Spoilers ' +spoilerContent[5].status} data-spoilerid='5'>
                        This game will change the in-game world. no matter what you do or how you do it. your action will have effekt.
                        your action and the world, will change. it's your job, to change it the way you like!
                    </div>
                </div>

                <div className='groupeContent' id='spoiler6'>
                    <p className={'spoilerHeadline ' +spoilerContent[6].status} data-spoilerid='6' onClick={showSpoiler}>Chose your way</p>
                    <div className={'Spoilers ' +spoilerContent[6].status} data-spoilerid='6'>
                        in this game, you will make a choice of how you want the world to be, What god do you want to dominate?. 
                        And you and your ingame friends, will then do what they can to make the world accordingly to your god of choise. 
                    </div>
                </div>

                <div className='groupeContent' id='spoiler7'>
                    <p className={'spoilerHeadline ' +spoilerContent[7].status} data-spoilerid='7' onClick={showSpoiler}>Rich Story</p>
                    <div className={'Spoilers ' +spoilerContent[7].status} data-spoilerid='7'>
                        This game is made with story in focus. And the social interactions with NPCs are at the center of this game.
                        There will be four main branches of story, one for each god. But! with the Dynamic NPC behavior.
                        No play thrue will be the same. since each realtionship is uniq to your game
                    </div>
                </div>

                <div className='groupeContent' id='spoiler8'>
                    <p className={'spoilerHeadline ' +spoilerContent[8].status} data-spoilerid='8' onClick={showSpoiler}>Combat system</p>
                    <div className={'Spoilers ' +spoilerContent[8].status} data-spoilerid='8'>
                        How the combat will be is yet to be determent. 
                        But your skills and allies will depend on what god, and way of life your charecter has chosen. 
                    </div>
                </div>

                </div>


            

        </div>
    )

}

export default SynopsisComponent