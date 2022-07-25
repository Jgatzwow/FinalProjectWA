import React from "react";
import style from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";





const DialogItem = (props) => {


    const {state} = props


    let dialogs  = state.map((el) => <div className={style.link_wrap}><NavLink className={style.dialog_link} key={el.id} to={`${el.id}`}>{el.name} </NavLink></div>);



    return (
        <div className={`${style.dialog} ${style.active}`}>

            {dialogs}

        </div>
    )
}





export default DialogItem