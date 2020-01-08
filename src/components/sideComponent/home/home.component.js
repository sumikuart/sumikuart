// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './home.style.css'
 
// img
import homebanner from '../../../assets/home/homebanner.jpg'
import blood from '../../../assets/home/blood.jpg'

const HomeComponent = () => {

    return (
        <div className='homestyle'>

            <div className='headline'>
                <p>SumikuART</p>
            </div>

            <div className='underheadline'>
                <p>The official website for the game: Kumik-3D(working title)</p>
            </div>

            <div className='homeimgholder'>
                <img src={homebanner} alt="" />
            </div>



            <div className='homeTopContent flex'>

                <div className='homeMainInfo'>
                    <p className='smallHeadline'>About us</p>
                    <p>Well at this point its about me</p>
                    <p>This is the page for my project "Kumik-3D (Working title)"</p>
                    <p>im currently a Web-Development Student </p>
                    <p>the goal is, to move on to studying game-programming later this year</p>
                    <p>i just need to complete my current education</p>
                    <p>-</p>
                    <p>With this goal, i have decided to design/make a game, i can work on paraleld with my educations</p>
                    <p>My hope is, to make a desent game, for people to buy and play</p>
                    <p>-</p>
                    <p>So what is this game?</p>
                    <p>it's a Japanes manga and anime inspired 3D mystery game, with social, tactical and magical elements.</p>
                    <p>my current vision for the game, is very dark (+18)</p>
                    <NavLink to='/synopsis'>Read More About the game HERE</NavLink>
                    <p>-</p>
                    <p>So Currently im doing everything by myself</p>
                    <p>But i know i have limites, so in order to make this game, the best version of it self</p>
                    <p>im looking for more people to join.</p>
                    <p className='bottomLine'>Look THERE ----></p>
                </div>

                <div className='homeFokus'>
                    <p className='smallHeadline'>Looking For new Members!!!</p>
                    <p>Are you looking for a serious game development team?</p>
                    <p></p>
                    <p>Do you have one or more of the following skills?</p>
                    <ul>
                        <li>Writing story and dialog</li>
                        <li>Programming (C++ C# and Java)</li>
                        <li>Know your way around Unity</li>
                        <li>Charecter Designer</li>
                        <li>3D modeling</li>
                        <li>3D Animation</li>
                        <li>Level Designer</li>
                        <li>Music and Sound</li>
                        <li>Voice Acting</li>
                    </ul>
                    <p>Then please come join</p>
                    <p>Any Questions or intresseted?</p>
                    <NavLink to='/contact'> Please click Here</NavLink>
                </div>

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