import React from "react";
import style from "./Works.module.css"
import {Work} from "./work/Work";

export const Works = () => {

    return (
        <div className={`${style.worksBox} section`}>
            <div className={style.container}>
                <h2>Мои проекты</h2>
                <div className={style.works}>
                    <Work title={"проект-1"}/>
                    <Work title={"проект-2"}/>
                    <Work title={"проект-3"}/>
                    <Work title={"проект-4"}/>
                </div>
            </div>
        </div>
    )
}