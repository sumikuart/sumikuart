import React, { createContext, useState } from 'react';


export const LeaderContext = createContext();

const LeaderContextProvider = (props) => {

    const [leaders, setLeaders] = useState([
        {subject:'Programmer',name:'Not Assigned Yet',img:'unknown.jpg','link':'empty' }, 
        {subject:'3D Graphics',name:'Not Assigned Yet',img:'unknown.jpg','link':'empty' },
        {subject:'Designer',name:'Not Assigned Yet',img:'unknown.jpg','link':'empty' },
        {subject:'Writer',name:'Not Assigned Yet',img:'unknown.jpg','link':'empty' },
        {subject:'Music & Sounds',name:'Not Assigned Yet',img:'unknown.jpg','link':'empty' },
        {subject:'Voice Acting',name:'Not Assigned Yet',img:'unknown.jpg','link':'empty' },
        {subject:'Web',name:'Sumiku',img:'sumiku.jpg','link':'sumiku'},
        {subject:'Producer',name:'Sumiku',img:'sumiku.jpg','link':'sumiku'}
    ])

    return( 

        <LeaderContext.Provider value={{leaders}}>
            {props.children}
        </LeaderContext.Provider>
        
    )
}

export default LeaderContextProvider