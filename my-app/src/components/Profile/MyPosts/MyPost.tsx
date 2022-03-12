import React from 'react';
import Mp from "./MyPost.module.css";
import Post from "./Post/Post";




export type MyPostProps = {
    id: number
    post: string

}

export type MyPostsArr = Array<MyPostProps>

type MyPropsPost = {
    posts: MyPostsArr
}

const MyPost = (props:MyPropsPost) => {


        let PostElement = props.posts.map(p=> <Post message={p.post}/>)

    return (


            <div className={Mp.bodypost}>
                <h3>MyPosts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div><button>Add Post</button></div>

                </div>
                <div className={Mp.posts}>
                    {PostElement}
                </div>
            </div>







    );
};

export default MyPost;