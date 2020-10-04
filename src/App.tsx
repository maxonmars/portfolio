import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Freelance} from "./components/freelance/Freelance";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
  return <>
    <Header/>
    <Main/>
    <Skills/>
    <Works/>
    <Freelance/>
    <Contacts/>
    <Footer/>
  </>
}

export default App;
