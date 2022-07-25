import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }


    const deactivateEditMode = () => {
        setEditMode(false)
    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        props.updateStatus(status);
    }


    return (
        <div>
            {!editMode &&
                <div className={style.statusDescriptionBlock}>
                    <span className={style.status_span}
                          onDoubleClick={activeEditMode}>{props.status || "Enter your status yo"}</span>
                </div>
            }
            {editMode &&
                <div className={style.statusDescriptionBlock}>
                    <input className={style.input} onChange={ onStatusChange } autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={ status }/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks
