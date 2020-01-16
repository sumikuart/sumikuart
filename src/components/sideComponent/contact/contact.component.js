// Main:
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './contact.style.css'



const ContactComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [contactFanStatus, setContactFanStatus] = useState('show')
    const [contactJoinStatus, setContactJoinStatus] = useState('hide')
    const [contactOtherStatus, setContactOtherStatus] = useState('hide')

    const openFanMailContact = () => {
        setContactFanStatus('show')
        setContactJoinStatus('hide')
        setContactOtherStatus('hide')
    }

    const openJoinMailContact = () => {
        setContactFanStatus('hide')
        setContactJoinStatus('show')
        setContactOtherStatus('hide')
    }

    const openOtherMailContact = () => {
        setContactFanStatus('hide')
        setContactJoinStatus('hide')
        setContactOtherStatus('show')
    }

    return (
        <div className='contactstyle'>

            <div className='headline'>
                <p>Contact Us</p>
            </div>

            <div className='underheadline'>
                <p>Here you can applay to become part of the project, or send fan mails</p>
            </div>

            <div className='contactContent'>

                <p className='mainContactHeadline'>Select</p>

                <div className='contactFormChoser flex'>

                    <div onClick={openFanMailContact} className={'firstinlineContact ' + contactFanStatus}>
                        <p className='smallHeadline'>Fan Mail</p>
                    </div>

                    <div onClick={openJoinMailContact} className={contactJoinStatus}>
                        <p className='smallHeadline'> Join The Project</p>
                    </div>

                    <div onClick={openOtherMailContact} className={'lastinlineContact ' + contactOtherStatus}>
                        <p className='smallHeadline'>Questions & Other Contacts</p>
                    </div>

                </div>

                <div className={'fanContactForm ' + contactFanStatus}>
                    <p className='formHeadline'>Fan Mail</p>

                    <div className='fanMailTextContent'>

                        <div className='fanContactBorder'>
                            <p>Welcome to the Fan Mail page. here you will find all you need, in order to send us a fan mail. Yay</p>
                            <p>Please follow in indstruktions below: (Note: a more efficient system will come later)</p>
                            <p>We Will do our best to reply!</p>
                        </div>


                        <ol>
                            <li>Selet the right E-Mail.
                            <ul>
                                    <li>in The bottom of this page, you will find a list of names, tittels and Emails.</li>
                                    <li>Select the One that fits your target best</li>
                                </ul>
                            </li>

                            <li>Copy the Email into your own E-Mail Client</li>
                            <li>In the Subject-line, start wirh "Sumiku-art Fan--Mail to:<span>-Type in the the receiver-</span>:" followed by your subject</li>
                            <li>Write your message</li>
                            <li>Press Send</li>
                        </ol>


                        <div>
                            <p className='smallHeadline'> Select The Right Email:</p>

                            <div className='fanContactCollection'>

                                <div className='contactFanBusinesscard'>

                                    <p className='contactBusinesscardTopper'>The Entire Team</p>

                                    <div className='flex'>
                                        <div>
                                            <p className='headlineBusinesscard'>Receiver:</p>
                                            <p className='contentBusinesscard'>Everyone</p>
                                        </div>

                                        <div>
                                            <p className='headlineBusinesscard'>Description:</p>
                                            <p className='contentBusinesscard'>Send us a Fan-Mail, directed to the entire team</p>

                                        </div>

                                        <div>
                                            <p className='headlineBusinesscard'>Email:</p>
                                            <p className='contentBusinesscard'>sumikuartofficial@gmail.com</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='contactFanBusinesscard'>

                                    <p className='contactBusinesscardTopper'>The Sound Team</p>

                                    <div className='flex'>
                                        <div className=''>
                                            <p className='headlineBusinesscard'>Receiver:</p>
                                            <p className='contentBusinesscard'>The sound and music Team</p>
                                        </div>

                                        <div className=''>
                                            <p className='headlineBusinesscard'>Description:</p>
                                            <p className='contentBusinesscard'>This will Send your Fan-Mail to the sound teams manager an he will share it around the team</p>

                                        </div>

                                        <div className=''>
                                            <p className='headlineBusinesscard'>Email:</p>
                                            <p className='contentBusinesscard'>yahkobproductions@gmail.com</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='contactFanBusinesscard'>

                                    <p className='contactBusinesscardTopper'>The Managment Team</p>

                                    <div className='flex'>
                                        <div className=''>
                                            <p className='headlineBusinesscard'>Receiver:</p>
                                            <p className='contentBusinesscard'>The Managment</p>
                                        </div>

                                        <div className=''>
                                            <p className='headlineBusinesscard'>Description:</p>
                                            <p className='contentBusinesscard'>This Will send your mail, To the managment Team.</p>

                                        </div>

                                        <div className=''>
                                            <p className='headlineBusinesscard'>Email:</p>
                                            <p className='contentBusinesscard'>sumikuartofficial@gmail.com</p>
                                        </div>
                                    </div>

                                </div>

                                <p>More Fan Mail Contacts will be added over time</p>

                            </div>

                        </div>


                    </div>
                </div>


                <div className={'joinContactForm ' + contactJoinStatus}>
                    <p className='formHeadline'>Join The Crew</p>

                    <div  className='joinReadMe'>
                        <p className='joinReadMeHeadline'>READ ME BEFORE APPLYING:</p>
                        <p>Hey, This  page is for people who wants to join the Project! yay</p>
                        <p>Below you can fint links to the defferent skillsets we need</p>
                        <p>You only need one of these skills in order to join</p>
                        <p>If a skillset has a line over its name, it means that the team is full</p>
                        <p>We can't promis that you will get accepted, but better try. we might want you!</p>
                        <p>It's important to note, that this is a TRANING PROJECT!</p>
                        <p>That means, you dont need to be good, you just need to seriously want to progress your abillitys, by making a game with us!</p>
                        <p>But please note: this is a serious project so dont waste our time if you are not intending to be serious too</p>
                        <p>You Will be asked to keep track of the time you use on this project. and send me notes on how many hours you have used</p>
                        <p>This is becourse, IF (DONT COUNT ON THIS) we end up earning money, you will get payed accordingly to the time you have used on the project</p>
                    </div>


                    <div className='skillsContactDiv'>
                        <p>The Skills Needed:</p>
                        <ul className='skillsContactUl flex'>
                            <li><NavLink to='/skill/writing'>Writing story and dialog</NavLink></li>
                            <li><NavLink to='/skill/programming'>Programming (C++ C# and Java)</NavLink></li>
                            <li><NavLink to='/skill/npcdesigner'>Charecter/Object Designer</NavLink></li>
                            <li><NavLink to='/skill/model'>3D modeling</NavLink></li>
                            <li><NavLink to='/skill/animation'>3D Animation</NavLink></li>
                            <li><NavLink to='/skill/lvldesign'>Level Designer</NavLink></li>
                            <li><NavLink to='/skill/sound'>Music and Sound</NavLink></li>
                            <li><NavLink to='/skill/voice'>Voice Acting</NavLink></li>
                        </ul>
                    </div>

                    <div  className='joinReadMe'>
                        <p className='joinReadMeHeadline'>How To Apply:</p>
                        <p >In order to apply being appart of this project, you need  a few things</p>

                        <p className='stepJoinHeadlineContact'> 1. Write a application.</p>
                            <p className='pointsJoinHeadlineContact'> - the application needs to contain a bit about you, what team you want to join, and your current skill level</p>
                            <p className='pointsJoinHeadlineContact'> - Inklude something, that has relevance to the team you want to join.(this is not a must, but will better you chances)</p>
                       
                        <p className='stepJoinHeadlineContact'>2. Send  it to us </p>
                            <p className='pointsJoinHeadlineContact'> - The next thing you need, is to send the application to us at sumikuartofficial@gmail.com </p>
                            <p className='pointsJoinHeadlineContact'> - To Make it easier for us, we ask you to start the subject-line with: "Sumiku-art application:" and include the team in the line too</p>
                      
                        <p className='stepJoinHeadlineContact'>3. Wait </p>
                        <p className='pointsJoinHeadlineContact'> - Now you just need to wait for our reply, we will respond no matter what we decide</p>
                        <p className='pointsJoinHeadlineContact'> - but how long it will take is currently unknown</p>
                        <p>Thanks</p>

                     </div>

                </div>

                <div className={'otherContactForm ' + contactOtherStatus}>
                    <p className='formHeadline'> Questions & Other Contact-Needs</p>

                    <div className='otherContactContent'>
                        <p>If you have any questions, or you have anything else on your mind please contact us at the following Email:</p>
                        <p className='underlineEmailInOtherContact'>sumikuartofficial@gmail.com</p>

                        <p>We Will come back to you as soon as possible</p>
                    </div>
                </div>


            </div>

        </div>
    )

}

export default ContactComponent