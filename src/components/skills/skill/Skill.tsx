import React from "react"
import style from "./Skill.module.css"

type PropsType = {
    title: string
    description: string
}

export const Skill: React.FC<PropsType> = ({title, description}) => {

    return <div className={style.skill}>
        <div className={style.icon}></div>
        <h3>{title}</h3>
        <p className={style.description}>{description}</p>
    </div>
}