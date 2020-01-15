// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './archive.style.css'


// context

import {NewsContext} from './../../../../context/news.context'

const ArchiveComponent = (props) => {
    
    const { news } =useContext(NewsContext)
    const [shownNewsTitle, setShownNewsTitle] = useState('')

    const [chosenNews, setChosenNews] = useState('')

    useEffect(() =>{
        setChosenNews(props.artikelWant)
    })


    if(!chosenNews){

        return(
            <div>

            </div>
        )

    } else {

    

    
    return (
        <div className='archiveStyle'>
            <p>{news[chosenNews].name}</p>
        </div>
    )

}
}
export default ArchiveComponent