import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import './App.css';
import './globalstyles.css'


// Context
import LeaderContextProvider from './context/teamleader.context';
import ProfileComponent from './components/sideComponent/about/profiles/profile.component';

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


// Profiles:
import SumikuProfileComponent from './components/sideComponent/about/profiles/personalprofile/kim.profile.component';

// Skills
import WritingSkillComponent from './components/sideComponent/about/skills/skillProfile/writing.skill.component'
import ProgrammingSkillComponent from './components/sideComponent/about/skills/skillProfile/programming.skill.component';
import NPCDesignerSkillComponent from './components/sideComponent/about/skills/skillProfile/npcDesigner.skill.component';
import ModelSkillComponent from './components/sideComponent/about/skills/skillProfile/model.skill.component';
import AnimationSkillComponent from './components/sideComponent/about/skills/skillProfile/animation.skill.component';
import LevelDesignerSkillComponent from './components/sideComponent/about/skills/skillProfile/lvlDesign.skill.component';
import SoundSkillComponent from './components/sideComponent/about/skills/skillProfile/sound.skill.component';
import VoiceSkillComponent from './components/sideComponent/about/skills/skillProfile/voice.skill.component';
import NemoNPCComponent from './components/sideComponent/characters/npcs/nemo/nemo.npc.component';
import JakobProfileComponent from './components/sideComponent/about/profiles/personalprofile/jakob.profile.component';
import NewsContextProvider from './context/news.context';



function App() {
  return (
    <div className="App">

      <Router>
        <LeaderContextProvider>
          <NewsContextProvider>

            <header>
              <NavigationsBar />
            </header>

            <main>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/about' component={AboutComponent} />


            <Route exact path='/about/profile/empty' component={ProfileComponent} />
            <Route exact path='/about/profile/kim' component={SumikuProfileComponent} />
            <Route exact path='/about/profile/jakob' component={JakobProfileComponent} />

            <Route exact path='/skill/writing' component={WritingSkillComponent} />
            <Route exact path='/skill/programming' component={ProgrammingSkillComponent} />
            <Route exact path='/skill/npcdesigner' component={NPCDesignerSkillComponent} />
            <Route exact path='/skill/model' component={ModelSkillComponent} />
            <Route exact path='/skill/animation' component={AnimationSkillComponent} />
            <Route exact path='/skill/lvldesign' component={LevelDesignerSkillComponent} />
            <Route exact path='/skill/sound' component={SoundSkillComponent} />
            <Route exact path='/skill/voice' component={VoiceSkillComponent} />


            <Route exact path='/characters' component={CharacterComponent} />

            <Route exact path='/characters/nemo' component={NemoNPCComponent} />

            <Route exact path='/contact' component={ContactComponent} />

            <Route path='/artikels/:chosenNews' component={NewsComponent} />
        

            <Route exact path='/status' component={StatusComponent} />
            <Route exact path='/story' component={SynopsisComponent} />
            <Route exact path='/art' component={ArtComponent} />
            </main>
            


            <footer>
              <FooterComponent />
            </footer>
            
            </NewsContextProvider>
            </LeaderContextProvider>

      </Router>

    </div>
  );
}

export default App;
