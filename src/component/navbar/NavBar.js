import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import "./NavBar.css"

export default class NavBar extends Component {
    
    state = {clicked:false}
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div>
            <nav className="Navbar-top">
                <ul className="navbar-items">
                    <li>MON - SAT: 6.00 AM - 10.00 PM</li>
                    <li>SUN: CLOSED</li>
                </ul>
            </nav>

            <nav className="NavbarItems">
                <h1 className="navbar-logo">EwayTAX</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li className="name" key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}    
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </div>
        )
    }
}


