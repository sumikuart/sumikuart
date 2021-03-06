import React, { createContext, useState } from 'react';


export const NewsContext = createContext();

const NewsContextProvider = (props) => {

    const [news, setNews] = useState([
        {id:'', 'name':'',date:'', tag: '',content:'',link:'',linkText:'', img:'', by:'', byLink:''},
       
        {id:'2020janOne', 'name':'Under Construktion part 1',date:'06-01-2020', tag:'A New Begning.',  
        content:'So Today is the day i started Creating this web page. The Game that this page is going to support, have been in my mind for Ages.. but i Will not be abel to do it alone. So this website will primary be for information and recruiting new members! if you want to join. Click on Contacts in the navigation bar to send us a message ',
        link:'', linkText:'', img:'2020janOne.jpg', by:'Kim',byLink:'/about/profile/kim'},
        
        {id:'2020janTwo', 'name':'A New Member has emerged.',date:'14-01-2020', tag:'Our First New Member!', 
        content:'Hallo Everyone! Today is a Great day. The team has increased by one! Out New member is Jakob.  And his Area of expertice is Sound and music! Take a minut to check out his Profile!',
        link:'/about/profile/jakob', linkText:'Jakobs Profile',img:'2020janTwo.jpg', by:'Kim', byLink:'/about/profile/kim'},
        
        {id:'2020janThree', 'name':'Under Construktion part 2',date:'15-01-2020', tag:'The Website is Almost There', 
        content:'it is almoste time, so excidet!!! hopefully i will uploade this doing the comming weekend, just need to add more details to the site, and make the page for contact and The Story. Then im done, and the site will be uploaded', 
        link:'', linkText:'',img:'2020janThree.jpg', by:'Kim',  byLink:'/about/profile/kim'},

        {id:'2020janFour', 'name':'Another one joins us!',date:'17-01-2020', tag:'Give a warme welcome to Felix', 
        content:'Felix has joined us yay, He will join the writing team and the design team. So he wil influence the world and its NPCs, take a look at his profile ', 
        link:'/about/profile/felix', linkText:'Felixs Profile',img:'2020janFour.jpg', by:'Kim',  byLink:'/about/profile/kim'},

        
        {id:'news', 'name':' Construction Complete! - We Are ONLINE!!! YAY',date:'19-01-2020', tag:'Hallo World', 
        content:'It is with pride i can now write this text, to tell everyone that the project is online on the web with this update. more to come!', 
        link:'', linkText:'',img:'2020janFive.jpg', by:'Kim',  byLink:'/about/profile/kim'}
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