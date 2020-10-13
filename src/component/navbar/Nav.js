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
                <a href="#"><img className="logo" src="https://static1.squarespace.com/static/5c17af22b1059880765e0b8d/t/5c17b7f4758d463b971d3a46/1592197429666/?format=1500w" alt="logo"/></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-items'}>
                    <li className="nav-links"><a href="/">HOME</a></li>
                    <li className="nav-links"><a href="/about">ABOUT</a></li>
                    <li className="nav-links"><a href="/services">SERVICES</a></li>
                    <li className="nav-links"><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    )
}
}