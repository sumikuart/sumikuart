// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './synopsis.style.css'


// Current High Array number to hide spoilers: 5
const SynopsisComponent = () => {

// OBS: lav et name del af dette array og brug det til at lave Navigation med.
    const [spoilerContent, setSpoilerContent] = useState([{status:'hide'}, {status:'hide'},{status:'hide'},{status:'hide'},{status:'hide'},{status:'hide'}])

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
                </ul>

                <p>Features:</p>

                    <ul>
                        <li><a href='#spoiler5'> test </a></li>
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
                    <p className={'spoilerHeadline ' +spoilerContent[4].status} data-spoilerid='4' onClick={showSpoiler}>hej 4</p>
                    <div className={'Spoilers ' +spoilerContent[4].status} data-spoilerid='4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione atque ab nam, incidunt, consectetur cum corrupti consequuntur expedita ea, adipisci itaque neque commodi nesciunt? Provident harum eligendi aperiam exercitationem.
                    
                    </div>
                </div>

                <div className='groupeContent' id='spoiler5'>
                    <p className={'spoilerHeadline ' +spoilerContent[5].status} data-spoilerid='5' onClick={showSpoiler}>hej 5</p>
                    <div className={'Spoilers ' +spoilerContent[5].status} data-spoilerid='5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ratione atque ab nam, incidunt, consectetur cum corrupti consequuntur expedita ea, adipisci itaque neque commodi nesciunt? Provident harum eligendi aperiam exercitationem.
                    
                    </div>
                </div>

                </div>


            

        </div>
    )

}

export default SynopsisComponent