import React from "react";
import style from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    const {followingInProgress, follow, unfollow, onPageChange,pageSize,currentPage,totalUsersCount,portionSize} = props

    return (
        <div className={style.wrapper}>
            <Paginator currentPage={currentPage}
                       onPageChange={onPageChange}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       portionSize={portionSize}/>
            <div>
                {
                    props.users.map(u => <User user={u} key={u.id}
                                               followingInProgress={followingInProgress}
                                               follow={follow} unfollow={unfollow}
                    />)
                }
            </div>
        </div>
    )
}

export default Users