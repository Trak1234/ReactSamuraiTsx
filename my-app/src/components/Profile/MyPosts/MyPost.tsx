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

    let postvalue = React.createRef<HTMLTextAreaElement>();

    let Click = () => {
        if (!!postvalue.current?.value) {
            let text = postvalue.current.value
            return alert(text)
        }
    }


        let PostElement = props.posts.map(p=> <Post message={p.post}/>)

    return (


            <div className={Mp.bodypost}>
                <h3>MyPosts</h3>
                <div>
                    <div><textarea ref={postvalue}></textarea></div>
                    <div><button onClick={()=> {Click}}>Add Post</button></div>

                </div>
                <div className={Mp.posts}>
                    {PostElement}
                </div>
            </div>







    );
};

export default MyPost;