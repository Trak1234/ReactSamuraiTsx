import React from 'react';
import prof from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const PostMassive = [
    {id:1, post:'hi, how are you ?'},
    {id:2, post:'It`s me friends'}
]


const Profile = () => {
    return (

            <div className={prof.main}>
                <ProfileInfo/>
                <MyPost posts={PostMassive}/>




            </div>

    );
};

export default Profile;