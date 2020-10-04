import React from "react";
import style from "./Work.module.css"

type PropsType = {
    title: string
    description: string
}

export const Work: React.FC<PropsType> = ({title, description}) => {

    return <div className={style.work}>
        <a href={"#"}>
            <div className={style.photo}></div>
        </a>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
}