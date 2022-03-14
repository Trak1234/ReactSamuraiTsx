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

export type DialogType = {
    id: number
    name:string

}

export type DialogProps = Array<DialogType>

export type MessageType = {
    id: number
    message:string

}

export type MessageProps = Array<MessageType>

export type  PropsDialog = {
    DalogsApp:DialogProps
    MessageApp: MessageProps
}




const Dialogs = (props:PropsDialog) => {

    let DialogElement = props.DalogsApp.map((d)=> {
        return <DialogItem id={d.id} name={d.name}/>
    });

    let MessageElement = props.MessageApp.map(m => <MessageItem massage={m.message}/> )

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