import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Freelance} from "./components/freelance/Freelance";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Preloader} from "./common/components/preloader/Preloader";

function App() {

    return (
        <Preloader>
            <div className={'appContainer'}>
                <Header/>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Works/>
                <Freelance/>
                <Contacts/>
                <Footer/>
            </div>
        </Preloader>
    )
}

export default App;
