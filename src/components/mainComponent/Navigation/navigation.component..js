// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './navigation.style.css'



const NavigationsBar = () => {

    return (
        <div className='navigationStyle' id='top'>

            <div className='designbox'></div>

            <div className='flex contentbox'>

                <div className='logoDiv'>
                    <NavLink to='/'>Sumiku<span>ART</span></NavLink>
                </div>

                <ul  className='flex'>
                    <li><div className="ball"></div><NavLink to='/artikels/news' className='navLiner'>NEWS</NavLink><div className="ball"></div></li>
                    <li><div className="ball"></div><NavLink to='/story'>Story & Features</NavLink><div className="ball"></div></li>
                    <li><div className="ball"></div><NavLink to='/art'>Game Media</NavLink><div className="ball"></div></li>
                    <li><div className="ball"></div><NavLink to='/characters' className='navLiner'>Characters</NavLink><div className="ball"></div></li>
                    <li><div className="ball"></div><NavLink to='/status'>Status</NavLink><div className="ball"></div></li>
                    <li><div className="ball"></div><NavLink to='/about'>About Us</NavLink><div className="ball"></div></li>
                    <li><div className="ball"></div><NavLink to='/contact'>Contact us</NavLink><div className="ball"></div></li>
                </ul>

            </div>

        </div>
    )

}

export default NavigationsBar