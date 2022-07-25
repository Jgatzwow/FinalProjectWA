import React from "react";
import style from "./Post.module.css";

const Post = (props) => {

    const {likesCount, message} = props

    return (
        <div className={style.item}>
            <div className={style.post}>
                <img
                    src="https://i0.wp.com/projectedfigures.com/wp-content/uploads/2013/05/iu-184.jpeg?fit=1000%2C492&ssl=1"
                    alt=""/>
                <div>
                    {message}
                </div>
            </div>
            <div className={style.likesWrap}>
                <span className={style.likes}>likes</span> {likesCount}
                <button className={style.like_btn}>
                    like
                </button>
            </div>
        </div>
    )
}

export default Post
