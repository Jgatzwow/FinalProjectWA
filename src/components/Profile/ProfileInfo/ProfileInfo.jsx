import React from "react";
import style from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/user.jpg"


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.descriptionBlock}>
                <div className={style.nameBlock}>
                    <h2>{props.profile.fullName}</h2>
                    <div className={style.profile_img_wrap}>
                        <img src={props.profile.photos.large || userPhoto} alt=""/>
                        <input className={style.profile__input} type="file" onChange={mainPhotoSelected}/>
                    </div>

                </div>
                <div className={style.status_wrapper}>
                    <h2>Profile Status</h2>
                    <p>( Double click to change )</p>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo