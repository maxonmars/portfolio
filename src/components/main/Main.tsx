import React from "react";
import style from "./Main.module.css"

export const Main = () => {

    return <div className={style.main}>
        <div className={style.container}>
            <div className={style.greeting}>
                <span>Hi There</span>
                <h1>I am Max Kupriyanchuk</h1>
                <p>A Frontend Developer</p>
            </div>
            <div className={style.photo}></div>
        </div>
    </div>
}