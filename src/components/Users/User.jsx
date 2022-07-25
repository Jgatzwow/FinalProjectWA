import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/img/user.jpg";
import {NavLink} from "react-router-dom";

let User = (props) => {

    const {unfollow, follow, followingInProgress, user} = props



    return (
        <div className={style.wrapper}>
            <div className={style.name}>{user.name}</div>
            <div className={style.status}>{user.status}</div>
            <div className={style.card__wrap}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={style.userPic}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }} className={style.button}> Unfollow </button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                            follow(user.id)
                        }} className={style.button}> Follow </button>}

                </div>
            </div>
        </div>
    )
}

export default User