import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import './App.css';
import './globalstyles.css'

// Components
import NavigationsBar from './components/mainComponent/Navigation/navigation.component.';
import FooterComponent from './components/mainComponent/Footer/footer.component';


import HomeComponent from './components/sideComponent/home/home.component';
import AboutComponent from './components/sideComponent/about/about.component'
import CharacterComponent from './components/sideComponent/characters/characters.component';
import ContactComponent from './components/sideComponent/contact/contact.component';
import NewsComponent from './components/sideComponent/news/news.component';
import StatusComponent from './components/sideComponent/status/status.component';
import SynopsisComponent from './components/sideComponent/Synopsis/synopsis.component';
import ArtComponent from './components/sideComponent/art/art.component';

// Context
import LeaderContextProvider from './context/teamleader.context';
import ProfileComponent from './components/sideComponent/about/profiles/profile.component';

// Profiles:
import SumikuProfileComponent from './components/sideComponent/about/profiles/personalprofile/sumiku.profile.component';


function App() {
  return (
    <div className="App">

      <Router>
        <LeaderContextProvider>

            <header>
              <NavigationsBar />
            </header>

            <main>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/about' component={AboutComponent} />


            <Route exact path='/about/profile/empty' component={ProfileComponent} />
            <Route exact path='/about/profile/sumiku' component={SumikuProfileComponent} />


            <Route exact path='/characters' component={CharacterComponent} />
            <Route exact path='/contact' component={ContactComponent} />
            <Route exact path='/news' component={NewsComponent} />
            <Route exact path='/status' component={StatusComponent} />
            <Route exact path='/story' component={SynopsisComponent} />
            <Route exact path='/art' component={ArtComponent} />
            </main>
            


            <footer>
              <FooterComponent />
            </footer>
            
            </LeaderContextProvider>

      </Router>

    </div>
  );
}

export default App;
