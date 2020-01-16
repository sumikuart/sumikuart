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

    useEffect(() => {
        for(var i=0; i < news.length; i++){
            if(news[i].id === props.artikelWant) {
                setChosenNews(i)
                console.log(i)
            }
        }

    })


    if(!chosenNews){

        return(
            <div>
                <p>loading</p>
            </div>
        )

    } else {

    return (
        <div className='archiveStyle'>
            <p className="newsHeadline">{news[chosenNews].name} </p>
            
            <div className='flex newsSubline'>
            <p className="newsTagline">{news[chosenNews].tag}</p>
            <p>|</p>
            <div className="newsBy flex">
            <p>Written by: </p>
            <NavLink to={news[chosenNews].byLink}>{ news[chosenNews].by}</NavLink>
            </div>
            <p className="newsDate">(uploaded: {news[chosenNews].date})</p>
            </div>


            <div className='flex'>
                <div className='articelNewsTextContainer'>
                    <p className="newsContent" >{news[chosenNews].content}</p>
                    <NavLink to={news[chosenNews].link} className="newsLink" >{news[chosenNews].linkText}</NavLink>
                </div>
                <div className='articelNewsImgContainer'>
                    <img src={require('../../../../assets/news/'+news[chosenNews].img)} alt=""/>
                </div>
            </div>
            
        </div>
    )

}
}
export default ArchiveComponent