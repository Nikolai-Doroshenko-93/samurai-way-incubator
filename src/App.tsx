import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Musik/Musik'
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {BrowserRouter,Route} from 'react-router-dom'

type PostsItemPropsType = {
  id: number,
  post: string,
  likes: number
}
type DialogsItemPropsType = {
  id: number,
  name: string
}
type MessageItemPropsType = {
  id: number,
  message: string
}

type ProfilePageType = {
  posts: Array<PostsItemPropsType>,
  newPostText: string
}
type MessagesPropsType = {
  messages: Array<MessageItemPropsType>,
  dialogs: Array<DialogsItemPropsType>
  newMessageBody: string
}

type RootStatePropsType = {
  profilePage: ProfilePageType,
  messagesPage: MessagesPropsType,
}
type StatePropsType = {
  state: RootStatePropsType
  addPost: () => void;
  updateNewPostText: (newText: string) => void
}
function App(props: StatePropsType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='work-wrapper'>
          <Route path='/profile'
                 render={() =>
                     <Profile
                         state={props.state.profilePage}
                         // @ts-ignore
                         dispatch={props.dispatch}
                     />}
          />
          <Route path='/dialogs'
                 render={() =>
                     <Dialogs
                         state = {props.state.messagesPage}
                         // @ts-ignore

                         dispatch={props.dispatch}
                     />}
          />
          <Route path='/musik' render={() => <Music/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
