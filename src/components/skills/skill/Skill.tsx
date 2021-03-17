import React from "react"
import style from "./Skill.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type PropsType = {
    title: string
    description: string
    skillIcon: any
}

export const Skill: React.FC<PropsType> = ({title, description, skillIcon}) => {

    return (
        <div className={style.skill}>
            <div className={style.outerSkill}>
                <div className={style.innerSkill}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={skillIcon}/>
                    </div>
                    <h3>{title}</h3>
                    <p className={style.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}