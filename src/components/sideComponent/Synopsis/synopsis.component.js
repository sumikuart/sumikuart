// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './synopsis.style.css'


// Current High Array number to hide spoilers: 9
const SynopsisComponent = () => {

// OBS: lav et name del af dette array og brug det til at lave Navigation med.
    const [spoilerContent, setSpoilerContent] = useState([{status:'hide'}, {status:'hide'}, {status:'hide'}, {status:'hide'}, {status:'hide'},  {status:'hide'},{status:'hide'},{status:'hide'},{status:'hide'},{status:'hide'}])

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
                    <li><a href='#spoiler0'> The Free Will </a></li>
                    <li><a href='#spoiler1'> The Gods & The World  </a></li>
                    <li><a href='#spoiler2'> Hive Areas</a></li>
                    <li><a href='#spoiler3'> The Setting </a></li>
                </ul>

                <p>Features:</p>

                    <ul className='bottomUlSynopsisNav'>
                        <li><a href='#spoiler4'>Dynamic NPC behavior</a></li>
                        <li><a href='#spoiler5'>a non status-quo world </a></li>
                        <li><a href='#spoiler6'>Chose your way </a></li>
                        <li><a href='#spoiler7'>Rich Story </a></li>
                        <li><a href='#spoiler8'>Combat system</a></li>
                        <li><a href='#spoiler9'>Alliance system</a></li>
                    </ul>

            </div>

            <div className='storyContent'>
                <p className='smallHeadline'> Story</p>

                <div className='groupeContent' id='spoiler0'>
                    <p className={'spoilerHeadline ' + spoilerContent[0].status} data-spoilerid='0' onClick={showSpoiler}>The Free Will</p>
                    <div className={'Spoilers ' +spoilerContent[0].status} data-spoilerid='0'> 
                        <p>Humans... Always thinking about there free will, and the power to chose there own destiny</p>
                        <p>To be Fair some people have more free wil then otheres. But in the end, it all comes down to one thing...</p>
                        <p>How strong are the gods are in you?</p>
                    </div>
                </div>

                <div className='groupeContent' id='spoiler1'>
                    <p className={'spoilerHeadline ' +spoilerContent[1].status} data-spoilerid='1' onClick={showSpoiler}>The Gods & The World </p>
                    <div className={'Spoilers ' +spoilerContent[1].status} data-spoilerid='1'>
                        <p>The Story takes place in our time, to normal people, everything is the same</p> 
                        <p>They do not know, They do not see how everything around them is changing.</p>
                        <p>But the Four gods, do not simply watch anymore.. they do not simply stand by idely anymore...</p>
                        <p>They Are Coming!</p>
                        <p>-</p>
                        <p>The Key, Will come.</p>
                        <p>The Key, Will change everything</p>
                        <p>The Key, Will open a door</p>
                        <p>Does the key alway choose which door to open?</p>
                    </div>
                </div>

                <div className='groupeContent' id='spoiler2'>
                    <p className={'spoilerHeadline ' +spoilerContent[2].status} data-spoilerid='2' onClick={showSpoiler}>Hive Areas</p>
                    <div className={'Spoilers ' +spoilerContent[2].status} data-spoilerid='2'>
                        <p>Beware for the Hive Areas!</p>
                        <p>In there, there are monsters, they said</p>
                        <p>In there, there are power, they said</p>
                        <p>In there, you will change, they said</p>
                        <p>In there, you might never come back, they said</p>
                        <p>But hey... they say a lot.</p>
                    </div>
                </div>


                <div className='groupeContent' id='spoiler3'>
                    <p className={'spoilerHeadline ' +spoilerContent[3].status} data-spoilerid='3' onClick={showSpoiler}>The Setting</p>
                    <div className={'Spoilers ' +spoilerContent[3].status} data-spoilerid='3'>
                    <p>The Game centers around you, at the start, you will enrolle into the (name to be determent) University of Art & Music</p>
                    <p>As the player you will living in the University's dorm, and from there the game will expand.</p>
                    <p>As the game unfolds, you will be traveling around the world, and see many places and experince many cultures</p>
                    <p>And many people will cross your path.</p>
                    <p>-</p>
                    <div className='synopsisQvote'>
                    <p>"i always thougth i was strange. diffrent. i have this feeling in me...</p>
                    <p> that i can't seem to ignore...It's like i have this power...</p>
                    <p> a power to feel if a person is important in grand scheam of the world.</p>
                    <p> As you can imagien, i don't have many friends.</p>
                    <p> I can't seem to care for anyone,  my power deems unimportant.</p>
                    <p> This means, when others used a lot of time with friends. i use a lot of time with my art of choice</p>
                    <p> As a result, im now enrolling into this highend Art Universety</p>
                    <p> Mabey i will meet people, that are important there" .- The Key</p>

                    </div>
                    </div>
                </div>

                <p>more to come...</p>

            </div>

            <div className='featuresContent'>
                <p className='smallHeadline'> Features</p>

                <div className='groupeContent' id='spoiler4'>
                    <p className={'spoilerHeadline ' +spoilerContent[4].status} data-spoilerid='4' onClick={showSpoiler}>Dynamic NPC behavior</p>
                    <div className={'Spoilers ' +spoilerContent[4].status} data-spoilerid='4'>
                    <p>  A Social System, that allows NPC's to move and act on a daily randomized rutine, </p> 
                    <p>  based on: mood, personality, relations, in-game events. and your past choises</p> 
                    <p>   If two NPC's meets in this rutine, there relationship changes, for better or worse.</p> 
                    </div>
                </div>

                <div className='groupeContent' id='spoiler5'>
                    <p className={'spoilerHeadline ' +spoilerContent[5].status} data-spoilerid='5' onClick={showSpoiler}>a non status-quo world</p>
                    <div className={'Spoilers ' +spoilerContent[5].status} data-spoilerid='5'>
                        <p> Change the in-game world. </p>
                        <p> no matter what you do or how you do it. your action will have effekt.</p>
                        <p> The world, will change. it's your job, to change it the way you like! </p>
                    </div>
                </div>

                <div className='groupeContent' id='spoiler6'>
                    <p className={'spoilerHeadline ' +spoilerContent[6].status} data-spoilerid='6' onClick={showSpoiler}>Chose your way</p>
                    <div className={'Spoilers ' +spoilerContent[6].status} data-spoilerid='6'>
                       <p> in this game, you will have to make a choice of how you want the world to be </p>
                       <p> What god do you want to dominate?.  </p> 
                       <p> it's up to you, to make that choice. and  see if you can make it come true </p>
                       <p> Each god will have followers and abilitys, the gods you do not allign with</p>
                       <p> Will try to stop you.</p>
                       <p> Mabye an alliance with other gods could be of use?</p>
                    </div>
                </div>

                <div className='groupeContent' id='spoiler7'>
                    <p className={'spoilerHeadline ' +spoilerContent[7].status} data-spoilerid='7' onClick={showSpoiler}>Rich Story</p>
                    <div className={'Spoilers ' +spoilerContent[7].status} data-spoilerid='7'>
                        <p>This game is made with story in focus.</p>
                        <p> the social interactions with NPCs are at the center of this game.</p>
                        <p> There will be four main branches of story, one for each god.</p>
                        <p> But! with the Dynamic NPC behavior. No play thrue will be the same.  </p>
                        <p> Since each realtionship is uniq to your game </p>
                    </div>
                </div>

                <div className='groupeContent' id='spoiler8'>
                    <p className={'spoilerHeadline ' +spoilerContent[8].status} data-spoilerid='8' onClick={showSpoiler}>Combat system</p>
                    <div className={'Spoilers ' +spoilerContent[8].status} data-spoilerid='8'>
                        <p> How the combat will be.  is yet to be determent. </p>
                        <p> But your skills and allies you have will depend on: </p>
                        <p> What god you support, and the way of life your charecter has chosen.</p> 
                    </div>
                </div>

                <div className='groupeContent' id='spoiler9'>
                    <p className={'spoilerHeadline ' +spoilerContent[9].status} data-spoilerid='9' onClick={showSpoiler}>Alliance system</p>
                    <div className={'Spoilers ' +spoilerContent[9].status} data-spoilerid='9'>
                        <p>You Will face many... problems thrue your adventure</p>
                        <p>This system allows you (And NPCs) to make Alliances with eachother</p>
                        <p>This will prove useful in situations</p>
                        <p>NPC's will make Alliance using the: Dynamic NPC behavior  </p>
                        <p>Just Remember, there can only be one dominating god</p>
                        <p>Make it yours</p>
                    </div>
                </div>


                    <p>more to come...</p>
                </div>


            

        </div>
    )

}

export default SynopsisComponent