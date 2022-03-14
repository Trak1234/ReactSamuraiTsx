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



export type AppType = Array<AppPost>

export type AppPost = {
    id: number
    post: string

}
export type DialogAppType = {
    id: number
    name:string
}

export type MessageTypeProps = {
    id:number
    message:string

}

export type DialogProps = Array<DialogAppType>


export type MessageType = Array<MessageTypeProps>



type PostArrType = {
    posts: AppType
    dialogApp: DialogProps
    messageApp: MessageType
}



const App = (props:PostArrType) => {
    return (
        <div className="app-wrapper">

            <BrowserRouter>
                <Header/>

                <Nabvar/>
                <div className='app-wrapper-grid'>
                    <Routes>
                        <Route path='/message/*' element={<Dialogs DalogsApp={props.dialogApp} MessageApp={props.messageApp} />}/>
                        <Route path='/profile' element={<Profile postsApp={props.posts} />}/>
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
