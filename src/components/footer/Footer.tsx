import React from "react";
import style from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    return (
        <div className={`${style.footer} section`}>
            <div className={style.container}>
                <ul className={style.contacts}>
                    <li><FontAwesomeIcon icon={'phone-square'} rotation={90}/><span>+7 913 465 30 95</span></li>
                    <li><FontAwesomeIcon icon={'envelope-square'}/><span>turbo3.6@cn.ru</span></li>
                </ul>
                <div className={style.copyrights}>© 2020 Kupriyanchuk, All Rights Reserved.</div>
                <ul className={style.social}>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "facebook-square"]}/></a></li>
                    <li className={style.tgWrapper}><a href={"/#"}><FontAwesomeIcon style={{fontSize: '18px', display: 'block'}} color={'black'} icon={["fab", "telegram-plane"]}/></a></li>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "linkedin"]}/></a></li>
                    <li><a href={"/#"}><FontAwesomeIcon icon={["fab", "github-square"]}/></a></li>
                </ul>
            </div>
        </div>
    )
}