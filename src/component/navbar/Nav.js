import React,{ Component } from 'react';
import './Nav.css';

export default class NavBar extends Component {

    state = {clicked:false}
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
    return (
        <div>
            <marquee className="news-scroll" behavior="scroll" direction="left">Here is some scrolling text is a Business Process Management and Consulting fir</marquee>

            <nav className="navbar">
                <a href="/"><img className="logo" src="/images/logo.jpeg" alt="logo"/></a>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-items'}>
                    <li className="nav-links"><a id="nav-links-a" href="/">HOME</a></li>
                    <li className="nav-links"><a id="nav-links-a" href="/about">ABOUT</a></li>
                    <li className="nav-links"><a id="nav-links-a" href="/services">SERVICES</a></li>
                    <li className="nav-links"><a id="nav-links-a" href="/contact">CONTACT</a></li>
                </ul>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
            </nav>
        </div>
    )
}
}