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

type PostPropsType = {
  id: number,
  post: string,
  likes: number
}


type DialogItemDataPropsType = {
  name: string,
  id: number
}
type MessageItemData = {
  id: number,
  message: string
}


type  AppPropsType = {
  postsData: Array<PostPropsType>
  dialogItemData: Array<DialogItemDataPropsType>,
  messageItemData: Array<MessageItemData>
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='work-wrapper'>
          <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
          <Route path='/dialogs' render={() => <Dialogs dialogItemData={props.dialogItemData} messageItemData={props.messageItemData}/>}/>
          <Route path='/musik' render={() => <Musik/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
