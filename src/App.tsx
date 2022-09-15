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
import state from "./components/redux/state";

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
  posts: Array<PostsItemPropsType>
}
type MessagesPropsType = {
  messages: Array<MessageItemPropsType>,
  dialogs: Array<DialogsItemPropsType>
}

type RootStatePropsType = {
  profilePage: ProfilePageType,
  messagesPage: MessagesPropsType,
}
type StatePropsType = {
  state: RootStatePropsType
  addPost: (postText: string) => void;
}
function App(props: StatePropsType) {
  {console.log(state)}
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
                         addPost={props.addPost}
                     />}
          />
          <Route path='/dialogs'
                 render={() =>
                     <Dialogs
                         state = {props.state.messagesPage}
                     />}
          />
          <Route path='/musik' render={() => <Musik/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
