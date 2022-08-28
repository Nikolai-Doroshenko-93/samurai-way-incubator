import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Musik from './components/Musik/Musik'
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='work-wrapper'>
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/musik' component={Musik}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
