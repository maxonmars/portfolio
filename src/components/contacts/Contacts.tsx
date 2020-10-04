import React from "react";
import style from "./Contacts.module.css"

export const Contacts = () => {

    return <div className={style.contactBox}>
        <div className={style.container}>
            <h2>Contact</h2>
            <form className={style.contacts} action="">
                <input type="text" placeholder={"Name"}/>
                <input type="text" placeholder={"E-mail"}/>
                <textarea placeholder={"Your message"}></textarea>
            </form>
            <button>Send Message</button>
        </div>
    </div>
}