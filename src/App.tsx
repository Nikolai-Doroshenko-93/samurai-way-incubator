import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import {BrowserRouter, HashRouter, Redirect, Route, withRouter} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./components/redux/app-reducer";


class App extends React.Component {

    componentDidMount() {
        //@ts-ignore
        this.props.initializeApp()
    }

    render() {
        //@ts-ignore
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <HashRouter>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='work-wrapper'>

                            <Route
                                path='/profile/:userId?'
                                render={() =>
                                    <ProfileContainer/>}
                            />

                            <Route path='/dialogs'
                                   render={() =>
                                       <DialogsContainer/>}
                            />
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path={'/'}  render={() =>
                                <Redirect to='/profile'/>}/>
                        </div>
                    </div>
                </HashRouter>
            )
        }
    }
}

const mapStateToProps = (state: any) => (
    {
        initialized: state.app.initialized
    }
)

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

