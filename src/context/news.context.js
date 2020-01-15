import React, { createContext, useState } from 'react';


export const NewsContext = createContext();

const NewsContextProvider = (props) => {

    const [news, setNews] = useState([
        {id:'', 'name':'',date:'', tag: '',content:'',link:'',linkText:'', img:''},
       
        {id:'2020janOne', 'name':'Under Construktion part 1',date:'06-01-2020', tag:'A New Begning.',  
        content:'So Today is the day i started Creating this web page. The Game that this page is going to support, have been in my mind for Ages.. but i Will not be abel to do it alone. So this website will primary be for information and recruiting new members! if you want to join. Click on Contacts in the navigation bar to send us a message ',
        link:'', linkText:'', img:'2020janOne.jpg'},
        
        {id:'2020janTwo', 'name':'A New Member has emerged.',date:'14-01-2020', tag:'Our First New Member!', 
        content:'Hallo Everyone! Today is a Great day. The team has increased by one! Out New member is Jakob.  And his Area of expertice is Sound and music! Take a minut to check out his Profile!',
        link:'/about/profile/jakob', linkText:'Jakobs Profile',img:'2020janTwo.jpg'},
        
        {id:'news', 'name':'Under Construktion part 2',date:'15-01-2020', tag:'the Website is Almost There', 
        content:'it is almoste time, so excidet!!! hopefully i will uploade this doing the comming weekend, just need to add more details to the site, and make the page for contact and The Story. Then im done, and the site will be uploaded', 
        link:'', linkText:'',img:'2020janThree.jpg'}
    ])

    // Set the newest artikel id to id:'news'. 
    
    // Når du laver en ny artikel. husk at sætte den gamles articels id, til noget anede. OG husk at lave et link i new.component s arkiv liste


    return( 

        <NewsContext.Provider value={{news}}>
            {props.children}
        </NewsContext.Provider>
        
    )
}

export default NewsContextProvider