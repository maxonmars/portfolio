import React from "react";
import style from "./Nav.module.scss"
import {Links} from "../links/Links";

export const Nav = () => {

    return (
        <ul className={style.nav}>
            <Links/>
        </ul>
    )
}