import React from "react";
import style from "./Main.module.css"
import {Arrow} from "../aboutMe/arrow/Arrow";
import {FogAnimation} from "../../common/components/fogAnimation/FogAnimation";
import { ReactTypingEffectDemo } from "./typingEffect/TypingEffect";

export const Main = () => {

    return (
        <div className={`${style.main} section`}>
            <FogAnimation/>
            <div className={style.container}>
                <div className={style.greeting}>
                    <ReactTypingEffectDemo/>
                    {/*<span>Hi There</span>
                    <h1>I am Max Kupriyanchuk</h1>
                    <p>A Frontend Developer</p>*/}
                </div>
                    <Arrow title={'скроль вниз'}/>
            </div>
        </div>
    )
}