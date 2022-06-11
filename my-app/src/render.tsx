import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dialog from "./components/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import State, {StateType} from "./Redux/State";
import {AddNewPost} from "./Redux/State";


export type State = StateType

export let renderEntireFree = (props:State) => {

    ReactDOM.render(
        <React.StrictMode>

            <App state={State} AddNewPost={AddNewPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}




