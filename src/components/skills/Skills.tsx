import React from "react";
import style from "./Skills.module.scss"
import {Skill} from "./skill/Skill";

export const Skills = () => {

    return (
        <div className={style.skillBox}>
            <div className={style.container}>
                <h2 className={style.title}>Мои навыки</h2>
                <div className={style.skills}>
                    <Skill skillIcon={['fab','react']} title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, hic."}/>
                    <Skill skillIcon={['fab','js-square']} title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, hic."}/>
                    <Skill skillIcon={['fab','css3-alt']} title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, hic."}/>
                    <Skill skillIcon={['fab','html5']} title={"HTML"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, hic."}/>
                </div>
            </div>
        </div>
    )
}