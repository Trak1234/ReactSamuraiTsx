import React from 'react';
import dialog from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (props:any) => {
    return (
        <div className={dialog.item}><NavLink to={'message/' + props.id} className = { navData => navData.isActive ? dialog.active : dialog.item }  >{props.name}</NavLink></div>
    )
}

const MessageItem = (props:any) => {
    return (
        <div className={dialog.message}>{props.massage}</div>
    )
}

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

let DialogElement = massiveDialog.map((d)=> {
    return <DialogItem id={d.id} name={d.name}/>
});

let MessageElement = massiveMessage.map(m => <MessageItem massage={m.message}/> )

const Dialogs = () => {
    return (



    <div className={dialog.main}>
        <div className={dialog.name}>
            {DialogElement}
        </div>
        <div className={dialog.messageMain}>
            {MessageElement}

        </div>
    </div>

)
    ;
};

export default Dialogs;