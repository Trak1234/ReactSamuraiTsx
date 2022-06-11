import React from 'react';
import dialog from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsPageType, MessagesPageType} from "../../Redux/State";


const DialogItem = (props:any) => {
    return (
        <div className={dialog.item}><NavLink to={'message/' + props.id} className = { navData => navData.isActive ? dialog.active : dialog.item }  >{props.name}</NavLink></div>
    )
}





const MessageItem = (props:any) => {

    let  valuebutton = React.createRef<HTMLTextAreaElement>();

    let MessageButton = () => {
        if (!!valuebutton.current?.value) {
            let text = valuebutton.current.value
            return alert(text)
        }
    }

    return (
       <div> <div className={dialog.message}>{props.massage}</div>
        <div className={dialog.texta}><textarea ref={valuebutton}></textarea></div>
        <div><button onClick={MessageButton} >Ответ</button></div>
        </div>
           )
}


export type  PropsDialog = {
    dialogs: DialogsPageType
    messages: MessagesPageType
}




const Dialogs = (props:PropsDialog) => {

    let DialogElement = props.dialogs.map((d)=> {
        return <DialogItem id={d.id} name={d.name}/>
    });

    let MessageElement = props.messages.map(m => <MessageItem massage={m.message}/> )

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