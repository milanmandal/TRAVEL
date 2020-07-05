import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
    return (
        <div>
           
<nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
                    <div className="container">
                    <a class="navbar-brand text-white font-weight-bold" href="#header">WELCOME HOME</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                        Menu
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#portfolio">Resort view</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
        </div>
    )
}

export default Nav


                /*
                 <Navbar collapseOnSelect expand="lg" bg="dark" fixed-top variant="dark">
                <Navbar.Brand href="#home">WELCOME HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Resort view</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
                */