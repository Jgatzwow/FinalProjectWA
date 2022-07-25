import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/img/logo.png"


const Header = (props) => {

    return (
        <header className={style.header}>
            <a href="/">
                <img className={style.logo} src={Logo}
                     alt="App-logo"/>
            </a>
            <h2 className={style.title}>This is my first SPA experience</h2>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button className={style.button} onClick={props.logout}>Log out</button> </div>
                    :<NavLink className={style.link} to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}

export default Header