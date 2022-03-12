import React from 'react';
import post from "./Post.module.css";
import Like from "./Like";


type PostPropsType = {message: string}


const Post = (props:PostPropsType) => {
    return (

            <div>
                <img className={post.img1} src='https://www.culture.ru/storage/images/be54ddf14aef1c58bd10535f5ab016f6/f761d875581f672587199693c755ecd5.jpeg' />
                {props.message}
                <Like/>

            </div>



    );
};

export default Post;