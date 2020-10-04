import React from "react";
import style from "./Works.module.css"
import {Work} from "./work/Work";

export const Works = () => {

    return <div className={style.worksBox}>
        <div className={style.container}>
            <h2>My Works</h2>
            <div className={style.works}>
                <Work title={"project-1"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate iure iusto minus nam necessitatibus nisi nulla quaerat quis sit."}/>
                <Work title={"project-2"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, suscipit."}/>
            </div>
        </div>
    </div>
}