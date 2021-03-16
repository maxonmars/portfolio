import React from "react";
import style from "./Work.module.css"

type PropsType = {
    title: string
}

export const Work: React.FC<PropsType> = ({title}) => {

    return (
        <div className={style.workContainer}>
            <a href="/#" className={style.work}>
                <span className={style.workItem}>{title}</span>
            </a>
            <div className={style.workImg}></div>
        </div>
    )
}