import React, { createContext, useState } from 'react';


export const NewsContext = createContext();

const NewsContextProvider = (props) => {

    const [news, setNews] = useState([
        {'name':'Under Construktion',date:'15-01-2020', content:'hej Part 1', img:''},
        {'name':'Under Construktion part 2',date:'15-01-2020',content:'hej Part 2', img:''}
    ])

    return( 

        <NewsContext.Provider value={{news}}>
            {props.children}
        </NewsContext.Provider>
        
    )
}

export default NewsContextProvider