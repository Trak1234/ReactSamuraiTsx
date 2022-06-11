import React from 'react';
import {renderEntireFree} from "../render";

export let State: StateType = {
    profilePage: {
        postsPage: [
            {id: 1, post: 'hi, how are you ?'},
            {id: 2, post: 'It`s me friends'}
        ],
    },
    dialogPage: {
        dialogsPage: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Daria'},
            {id: 3, name: 'Oleg'},
            {id: 4, name: 'Afanasii'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Zoya'},

        ],
        messagesPage: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'What is you name?'},
            {id: 4, message: 'Anime'},
            {id: 5, message: '2d'},
            {id: 6, message: 'How are you ?'},
        ]
    }

}

export default State;

export let AddNewPost  = (props:string) => {

    let NewPost = {
        id: 3,
        post: props
    }
    State.profilePage.postsPage.push(NewPost);
    renderEntireFree(State);

}



export type PropsAddNewPost = {
    AddNewPost:() => void
}

export type PostType = {
    id: number
    post: string
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostsPageType = PostType[]

export type DialogsPageType = Array<DialogType>

export type MessagesPageType = Array<MessageType>


export type StateType = {
    profilePage: {
        postsPage: PostsPageType
    }
    dialogPage: {
        dialogsPage: DialogsPageType
        messagesPage: MessagesPageType
    }

}
