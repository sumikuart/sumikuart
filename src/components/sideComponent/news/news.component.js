// Main:
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

// Styles:
import './news.style.css'


// context

import { NewsContext } from './../../../context/news.context'
import ArchiveComponent from './Archive/archive.component';

const NewsComponent = (props) => {

    const { news } = useContext(NewsContext)
    const [artikelWant, setArtikelWant] = useState('')


    useEffect(() => {
        console.log(props.match.params.chosenNews)
        setArtikelWant(props.match.params.chosenNews)
            window.scrollTo(0, 0) 

    }, []);

    useEffect(() => {

        setArtikelWant(props.match.params.chosenNews)
    });




    const changeNews = (e) => {
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


                        <ArchiveComponent artikelWant={artikelWant} />


                    </div>


                    <div className='newsRightContent'>
                        <p className='smallHeadline'>News Archive:</p>
                        <ul>
                            <li className='currentNewLink'><NavLink className='archiveLink' data-id={'news'} to='/artikels/news' onClick={changeNews}>Current News <span>(Under Construction part 2)</span></NavLink></li>
                        </ul>
                        <div className='scrollerNewsArchive'>
                            <ul>
                                <li className='noListPoint'><p>January 2020:</p></li>
                                <li><NavLink className='archiveLink' data-id={'2020janOne'} to='/artikels/2020janOne' onClick={changeNews}> 1. Under Construction part 1.</NavLink></li>
                                <li><NavLink className='archiveLink' data-id={'2020janTwo'} to='/artikels/2020janTwo' onClick={changeNews}> 2. A New Member has emerged.</NavLink></li>
                                <li><NavLink className='archiveLink' data-id={'2020janThree'} to='/artikels/2020janThree' onClick={changeNews}> 3. Under Construction part 2.</NavLink></li>
                                <li><NavLink className='archiveLink' data-id={'news'} to='/artikels/news' onClick={changeNews}>4. Another one joins us! </NavLink></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default NewsComponent