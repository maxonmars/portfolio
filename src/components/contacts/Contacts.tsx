import React from "react";
import style from "./Contacts.module.css"
import {SuperInput} from "./superInput/SuperInput";
import {SuperTextarea} from "./superTextarea/SuperTextarea";
import {SuperButton} from "../../common/components/superButton/SuperButton";
import {Contact} from "./contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Contacts = () => {

    return (
        <div className={`${style.contactBox} section`}>
            <div className={style.container}>
                <h2>Контакты</h2>
                <div className={style.formContactsWrapper}>
                    <div className={style.formWrapper}>
                        <form className={style.contactsForm} action="">
                            <SuperInput title={'name'}/>
                            <SuperInput inputType={'email'} title={'email'}/>
                            <SuperInput title={'company'}/>
                            <SuperTextarea title={'ваши пожелания'}/>
                        <SuperButton title={'send message'} color={"white"}/>
                        </form>
                    </div>
                    <div className={style.contactsWrapper}>
                        <h3>Не стесняйтесь обратиться ко мне!</h3>
                        <p>Легче всего меня поймать в телеграм, либо позвонив на мой номер, но так же регулярно проверяю
                            электронную почту</p>
                        <div className={style.contacts}>
                            <Contact title={'+7 913 465 30 95'} iconType={'phone'} rotate={90}/>
                            <Contact title={'turbo3.6@cn.ru'} iconType={'envelope'}/>
                            <Contact title={'@kprnck'} iconType={'clock'}/>
                            <Contact title={'@kprnck'} iconType={'map-marker-alt'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}