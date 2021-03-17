import React from "react";
import style from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <ul className={style.contacts}>
                    <li><FontAwesomeIcon icon={'phone-square'} rotation={90}/><span>+7 913 465 30 95</span></li>
                    <li><FontAwesomeIcon icon={'envelope-square'}/><span>turbo3.6@cn.ru</span></li>
                </ul>
                <div className={style.copyrights}>© 2020 Kupriyanchuk, All Rights Reserved.</div>
                <ul className={style.social}>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "telegram-plane"]}/></a></li>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "github-alt"]}/></a></li>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "linkedin-in"]}/></a></li>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
                </ul>
            </div>
        </div>
    )
}