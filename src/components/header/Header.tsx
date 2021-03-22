import React, { useEffect, useState } from "react";
import style from "./Header.module.scss"
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {

    const [headerB, setHeaderB] = useState(`${style.headerBlock}`);

    const listenScrollEvent = () => {
        if (window.scrollY < 33) {
            return setHeaderB(`${style.headerBlock}`);
        } else if (window.scrollY > 30) {
            return setHeaderB(`${style.headerBlock2}`);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <div className={`${style.header} ${headerB}`}>
            <div className={style.container}>
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    )
}