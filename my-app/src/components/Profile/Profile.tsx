import React from 'react';
import prof from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsPageType} from "../../Redux/State";




type ProfArrType = {
    postsApp: PostsPageType
}



const Profile = (props:ProfArrType) => {
    return (

            <div className={prof.main}>
                <ProfileInfo/>
                <MyPost posts={props.postsApp}/>




            </div>

    );
};

export default Profile;