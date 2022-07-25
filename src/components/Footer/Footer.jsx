import React from "react";
import style from "./Foter.module.css"


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.info_wrapper}>
                <h3 className={style.info} >Contact info:</h3>
                <p>ForExample@gmail.com</p>
            </div>
            <h3 className={style.copyright}>
                © Copyright - SPA final Project
            </h3>
        </footer>
    )
}

export default Footer