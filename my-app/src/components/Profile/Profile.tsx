import React from 'react';
import prof from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




export type PostsProfType = {
    id: number
    post: string

}

export type ProfPostsType = Array<PostsProfType>

type ProfArrType = {
    postsApp: ProfPostsType
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