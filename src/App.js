import React from 'react'
import './App.css'
import Portfolio from './components/portfolio';
import About from './components/about';
import Nav from './components/nav';
import Team from './components/team'
import Service from './components/service'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header';
import { HashRouter as Router, Route} from "react-router-dom";


export default function App() {
    return (
        <div>
            <Router>
            <Nav/>
            <Header/>
            <Service/>
            <Portfolio/> 
            <About/>   
            <Team/>
            <Contact/>
            <Footer/>
            </Router>
        </div>
    )
}
