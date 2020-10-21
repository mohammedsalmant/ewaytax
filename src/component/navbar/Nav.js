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
            <nav className="navbar">
                <a href="/"><img className="logo" src="/images/logo.jpeg" alt="logo"/></a>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-items'}>
                    <li className="nav-links"><a id="nav-links-a" href="/">HOME</a></li>
                    <li className="nav-links"><a id="nav-links-a" href="/about">ABOUT</a></li>
                    <li className="nav-links"><a id="nav-links-a" href="/services">SERVICES</a></li>
                    <li className="nav-links"><a id="nav-links-a" href="#">CONTACT</a></li>
                </ul>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
            </nav>
        </div>
    )
}
}