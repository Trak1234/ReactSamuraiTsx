import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dialog from "./components/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

const PostMassive = [
    {id:1, post:'hi, how are you ?'},
    {id:2, post:'It`s me friends'}
]




const massiveDialog = [
    {id: 1 , name:'Ivan'},
    {id: 2 , name:'Daria'},
    {id: 3 , name:'Oleg'},
    {id: 4 , name:'Afanasii'},
    {id: 5 , name:'Andrey'},
    {id: 6 , name:'Zoya'},

]



const massiveMessage = [
    {id: 1 , message:'Hi'},
    {id: 2 , message:'Hello'},
    {id: 3 , message:'What is you name?'},
    {id: 4 , message:'Anime'},
    {id: 5 , message:'2d'},
    {id: 6 , message:'How are you ?'},


]



ReactDOM.render(
  <React.StrictMode>
    <App posts={PostMassive} dialogApp={massiveDialog} messageApp={massiveMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
