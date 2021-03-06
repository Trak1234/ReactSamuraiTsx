import React from 'react';
import prof from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddNewPost, PostsPageType, PropsAddNewPost} from "../../Redux/State";




type ProfArrType = {
    postsApp: PostsPageType
    AddPost: (props:string) => void


}



const Profile = (props:ProfArrType) => {
    return (

            <div className={prof.main}>
                <ProfileInfo/>
                <MyPost posts={props.postsApp}
                        funcPost={props.AddPost}
                />




            </div>

    );
};

export default Profile;