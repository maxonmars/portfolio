import React from "react";
import style from "./Skills.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {

    return <div className={style.skillBox}>
        <div className={style.container}>
            <h2 className={style.title}>Skills</h2>
            <div className={style.skills}>
                <Skill title={"React"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tempora."}/>
                <Skill title={"JS"} description={"Lorem ipsum dolor sit amet."}/>
                <Skill title={"CSS"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, odit provident quam quia tempora temporibus!"}/>
            </div>
        </div>
    </div>
}