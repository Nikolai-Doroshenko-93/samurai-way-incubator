import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Music from './components/Musik/Musik'
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {BrowserRouter,Route} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className='work-wrapper'>
          <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer/>}
          />
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() =><UsersContainer/>}/>
          <Route path='/musik' render={() => <Music/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
