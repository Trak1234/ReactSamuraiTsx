import React from 'react';
import li from "./Like.module.css";



const Like = (props:any) => {
    return (
        <div className={li.mainLike}>
            <button className={li.button1} onClick={()=>(alert('asdasd'))}>Like</button>
            {props.likeCount}
        </div>
    );
};

export default Like;