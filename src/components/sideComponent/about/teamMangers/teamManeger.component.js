// Main:
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


// Styles:
import './teamManeger.style.css'

// context
import {LeaderContext} from '../../../../context/teamleader.context'


const LeaderPoster = (props) => {
    return(
        <div className='leaderContainer'>
            <p>{props.currentperson.subject}</p>
            <div className='lederImgHolder'>
                <img src={require('../../../../assets/team/' + props.currentperson.img)} alt=""/>
            </div>

            <p>{props.currentperson.name}</p>
            <NavLink to={"/about/profile/" +props.currentperson.link}> More Info </NavLink>
        </div>
    )
}

const ManegerComponent = () => {

    const { leaders } = useContext(LeaderContext)
    
    const mapManagers = (e) =>{
        return leaders.map(function(currentperson, i){
            return <LeaderPoster currentperson={currentperson} key={i} />

        }) 
    }

    return (
        <div className='mangercomponentstyle'>

            <div>
                <p className='smallHeadline'>Team Managers</p>
            </div>

            <div className='flex Managerboard'>
                {mapManagers()}
            </div>

        </div>
    )

}

export default ManegerComponent