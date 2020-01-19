// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './footer.style.css'



const FooterComponent = () => {

    return (
        <div className='footerstyle'>
            <div className="flex footerContent">
                <div className='leftFooterContent'>

                    <ul>
                        <li>Founded: 22-12-2019</li>
                        <li>Main headquarters: Denmark</li>
                        <li>Time Zone: GMT+1</li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>

                </div>
                <div className='rightFooterContent'>

                    <p>Finde us at:</p>
                    <ul>
                        <li>
                            <a href='https://www.youtube.com/channel/UCF9r1RCBT-M6zMQ23G7Kfnw'>YouTube</a>
                        </li>
                    </ul>

                    <p>(more to come)</p>

                </div>
            </div>

            <p className='footerUpdateNote'>Site Last Updated: 19-01-2020 by Kim</p>

        </div>
    )

}

export default FooterComponent