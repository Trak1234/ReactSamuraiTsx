import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nabvar from "./components/Nabvar/Nabvar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import dialog from "./components/Dialogs/Dialogs.module.css";
import {PropsAddNewPost, StateType} from "./Redux/State";
import {AddNewPost} from "./Redux/State";
import {State} from "./render";


type PostArrType = {
    state: State
    AddNewPost: (props:string) => void

}


const App = (props: PostArrType) => {
    return (
        <div className="app-wrapper">

            <BrowserRouter>
                <Header/>

                <Nabvar/>
                <div className='app-wrapper-grid'>
                    <Routes>
                        <Route path='/message/*' element={
                            <Dialogs dialogs={props.state.dialogPage.dialogsPage}
                                     messages={props.state.dialogPage.messagesPage}/>
                        }/>
                        <Route path='/profile'
                               element={<Profile
                                   postsApp={props.state.profilePage.postsPage}

                                   AddPost = {props.AddNewPost}
                                   />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>

                </div>
            </BrowserRouter>


        </div>
    );
}


export default App;
