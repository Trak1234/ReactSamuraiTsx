import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nabvar from "./components/Nabvar/Nabvar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = () => {
    return (
        <div className="app-wrapper">

            <BrowserRouter>
                <Header/>

                <Nabvar/>
                <div className='app-wrapper-grid'>
                    <Routes>
                        <Route path='/message/*' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
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
