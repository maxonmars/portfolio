import React from "react";
import style from "./Freelance.module.css"
import {FogAnimation} from "../../common/components/fogAnimation/FogAnimation";
import {Parallax} from 'react-parallax';
import bg from '../../assets/bg-img/mount2-bg.jpeg'

export const Freelance = () => {

    return (
        <div className={`${style.freelance} section`}>
            <Parallax bgImage={bg} style={{background: 'no-repeat fixed 50% 50%/cover', width: '100%'}} strength={1000}>
            <FogAnimation/>
                <div className={style.container}>
                    <h2>Готов рассмотреть вариант удаленной работы</h2>
                </div>
            </Parallax>
        </div>
    )
}