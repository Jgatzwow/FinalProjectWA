import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/img/logo.png"


const NavBar = () => {
    return (
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to="/Profile/24950" activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/Dialogs" activeClassName={style.active}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/Users" activeClassName={style.active}>Users</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/News" activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/Music" activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink>
                </div>
            </nav>
            <div className={style.item}>
                <a href="#">
                    <img className={style.logo} src={Logo} alt="Big APP Logo"/>
                </a>
            </div>
        </div>
    )
}

export default NavBar