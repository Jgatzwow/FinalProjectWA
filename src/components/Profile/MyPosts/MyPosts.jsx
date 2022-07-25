import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    const {
        postData,
        newPostText,
        addPost,
        updateNewPostText} = props

    let addNewPost = () => {
        addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        updateNewPostText(text)
    };

    let posts = postData.map(p => <Post postData={postData} message={p.post} likesCount={p.likesCount} key={p.id} />)

    return (

        <div className={style.postsBlock}>
            <h2 className={style.title}> My posts </h2>
            <div>
                <div>
                    <textarea className={style.input} placeholder='Enter your message' onChange={onPostChange} value={newPostText}/>
                </div>
                <div>
                    <button className={style.button} onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>

                {
                    posts
                }

            </div>
        </div>

    )
}

export default MyPosts