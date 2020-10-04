import React from "react";
import style from "./Nav.module.css"

export const Nav = () => {

    return <ul className={style.nav}>
        <li>Home</li>
        <li>Skill</li>
        <li>Work</li>
        <li>Contact</li>
    </ul>
}