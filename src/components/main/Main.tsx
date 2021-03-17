import React from "react";
import style from "./Main.module.scss"
import {Arrow} from "./arrow/Arrow";
import {FogAnimation} from "../../common/components/fogAnimation/FogAnimation";
import { ReactTypingEffectDemo } from "./typingEffect/TypingEffect";

export const Main = () => {

    return (
        <div className={style.main}>
            <FogAnimation/>
            <div className={style.container}>
                <ReactTypingEffectDemo/>
                <Arrow title={'скроль вниз'}/>
            </div>
        </div>
    )
}