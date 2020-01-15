// Main:
import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './home.style.css'
 
// img
import homebanner from '../../../assets/home/homebanner.jpg'

import homebanner2 from '../../../assets/home/homebanner2.jpg'

import blood from '../../../assets/home/blood.jpg'
import ArchiveComponent from '../news/Archive/archive.component';

const HomeComponent = () => {

    const [homeImageSliderPos ,setHomeImageSliderPos] = useState('homeBannerPos')
    const [homeBannerPos, setHomeBannerPos] = useState(1)
    const [numberOfImgInHomeBanner, setNumberOfImgInHomeBanner] = useState(2)

    const moveHomeBannerLeft  = () => {
        if(homeBannerPos == numberOfImgInHomeBanner){
            setHomeBannerPos(1)
        } else {
            setHomeBannerPos(homeBannerPos+1)
        }
    
    }

    const moveHomeBannerRight  = () => {

    if(homeBannerPos == 1){
        setHomeBannerPos(numberOfImgInHomeBanner)
    } else {
        setHomeBannerPos(homeBannerPos-1)
    }


    }

    const setPositionInBannerByDot = (pos) => {
        setHomeBannerPos(pos)
    }
 
    return (
        <div className='homestyle'>

            <div className='headline'>
                <p>SumikuART</p>
            </div>

            <div className='underheadline'>
                <p>The official website for the game: Kumik-3D(working title)</p>
            </div>

            <div className='homeimgholder'>
                <div className='homeBannerLeftArrow' onClick={moveHomeBannerLeft}>
                    <p>&#60;</p>
                </div>

                <div className={'homeimgbannerMover ' + (homeImageSliderPos+homeBannerPos)}>
                    <img src={homebanner2} alt="" className='homeBannerBasePos1'/>
                    <img src={homebanner} alt="" className='homeBannerBasePos2'/>
                </div>

                <div className='homeBannerRightArrow' onClick={moveHomeBannerRight}>
                    <p>&#62;</p>
                </div>

                <div className='homeBannerPositionDots'>
                    <div className='homePositionDotDiv' onClick={()=>setPositionInBannerByDot(1)}></div>
                    <div className='homePositionDotDiv' onClick={()=>setPositionInBannerByDot(2)}></div>
                </div>

            </div>



            <div className='homeTopContent flex'>

                <div className='homeMainInfo'>
                    <p className='smallHeadline'>About us</p>
                    <p>Well at this point its about me (Kim)</p>
                    <p>This is the page for my project "Kumik-3D (Working title)"</p>
                    <p>im currently a Web-Development Student </p>
                    <p>the goal is, to move on to studying game-programming later this year</p>
                    <p>i just need to complete my current education first</p>
                    <p>-</p>
                    <p>With this goal, i have decided to design/make a game, i can work on paralled with my educations</p>
                    <p>This game is a traning ground, and everyone who joins the project, should have training as the main priority</p>
                    <p>But still my hope is, to make a good game, for people to buy and play</p>
                    <p>-</p>
                    <p>So what is this game?</p>
                    <p>it's a Japanes manga and anime inspired 3D mystery game, with social, tactical and magical elements.</p>
                    <p>my current vision for the game, is very dark (+18)</p>
                    <NavLink to='/story'>Read More About the game HERE</NavLink>
                    <p>-</p>
                    <p>So Currently im doing everything by myself</p>
                    <p>But i know i have limites, so in order to make this game, the best version of it self</p>
                    <p>im looking for more people to join.</p>
                    <p className='bottomLine'>Look THERE ----></p>
                </div>

                <div className='homeFokus'>
                    <p className='smallHeadline'>Looking For new Members!!!</p>
                    <p>!!!! This is a Practice Project, witch mean that it's about evolving our skills, not about being the best !!!!</p>
                    <p></p>
                    <p>Do you have one or more of the following skills?</p>
                    <p>Or do you want to get better at any of them?</p>
                    <ul>
                    <li><NavLink to='/skill/writing'>Writing story and dialog</NavLink></li>
                        <li><NavLink to='/skill/programming'>Programming (C++ C# and Java)</NavLink></li>
                        <li><NavLink to='/skill/npcdesigner'>Charecter/Object Designer</NavLink></li>
                        <li><NavLink to='/skill/model'>3D modeling</NavLink></li>
                        <li><NavLink to='/skill/animation'>3D Animation</NavLink></li>
                        <li><NavLink to='/skill/lvldesign'>Level Designer</NavLink></li>
                        <li><NavLink to='/skill/sound'>Music and Sound</NavLink></li>
                        <li><NavLink to='/skill/voice'>Voice Acting</NavLink></li>
                    </ul>
                    <p>Then please come join</p>
                    <p>you can applay for as many teams as you want</p>
                    <p>Any Questions or intresseted?</p>
                    <NavLink to='/contact'> Please click Here</NavLink>
                </div>

            </div>

            <div className='archiveStyle newsHome'>
                <NavLink to='/artikels/news' className='newsMetaHeadline'>NEWS</NavLink>
            <ArchiveComponent artikelWant={'news'} />
            </div>

            <div className='homebottomContent flex'>

            <div className='homeimgholderbottom'>
                <img src={blood} alt="" />
            </div>

            <div className='homebottomtext'>
                <p className='a'>"I just Wish i didn't Know</p>
                <p className='b'>I just Wish i didn't Know!</p>
                <p className='c'>I just Wish i didn't Know!!</p>
                <p className='d'>I just Wish i didn't Know!!!</p>
                <p className='e'>I just Wish i didn't Know!!!!</p>
                <p className='f'>I just Wish i didn't Know!!!!!</p>
                <p className='g'>I just Wish i didn't Know!!!!!!</p>
                <p className='h'>I just Wish i didn't Know!!!!!!!"</p>
                <p className='i'>- Nemo Kurai</p>

                <p className='j'>"Don't you?"</p>

            </div>
                
            </div>



        </div>
    )

}

export default HomeComponent