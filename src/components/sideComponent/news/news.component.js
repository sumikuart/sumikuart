// Main:
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

// Styles:
import './news.style.css'


// context

import {NewsContext} from './../../../context/news.context'
import ArchiveComponent from './Archive/archive.component';

const NewsComponent = () => {
    
    const { news } =useContext(NewsContext)

    const [artikelWant, setArtikelWant] = useState('')


    const test = (e) => {
        const lookingforNewsid = e.target.dataset.id
        setArtikelWant(lookingforNewsid)
    }

    return (
        <div className='newsStyle'>

            <div className='headline'>
                <p>News</p>
            </div>

            <div className='underheadline'>
                <p>Every Thing new about the game, and it's development.</p>
            </div>

            <div className='newsContent'>
                <div className='newsFlexer flex'>
                    <div className='newsLeftContent'>

                     
                          <ArchiveComponent artikelWant={artikelWant}/>
               

                    </div>


                    <div className='newsRightContent'>
                         <p className='smallHeadline'>News Archive:</p>
                         <ul>
                    
                            <li><NavLink className='archiveLink' data-id={0}  to='/news/archive/2020janOne' onClick={test}>Under Construction - 15-01-2020</NavLink></li> 
                            <li><NavLink className='archiveLink' data-id={1}  to='/news/archive/2020janTwo' onClick={test}>Under Construction - 15-01-2020</NavLink></li> 
                         </ul>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default NewsComponent