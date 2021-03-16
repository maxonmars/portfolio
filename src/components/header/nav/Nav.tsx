import React from "react";
import style from "./Nav.module.css"

export const Nav = () => {

    return (
        <ul className={style.nav}>
            <li><a href={'/#'}>главная</a></li>
            <li><a href={'/#'}>обо мне</a></li>
            <li><a href={'/#'}>навыки</a></li>
            <li><a href={'/#'}>проекты</a></li>
            <li><a href={'/#'}>контакты</a></li>
        </ul>
    )
}