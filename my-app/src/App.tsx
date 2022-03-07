import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nabvar from "./components/Nabvar/Nabvar";
import Profile from "./components/Profile/Profile";


const App=()=> {
  return (
    <div className="app-wrapper">


        <Header/>

        <Nabvar/>
        <Profile/>
    </div>
  );
}






export default App;
