import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {

    return <div className={style.footer}>
        <div className={style.container}>
            <h2>Max</h2>
            <ul className={style.social}>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Vkontakte</a></li>
            </ul>
            <p>© 2020 Kupriyanchuk, All Rights Reserved.</p>
        </div>
    </div>
}