import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div>
            <div className="about-container">
                <img className="about-img" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
                <div className="about-head">ABOUT</div>
            </div>
            <div className="about-body">
                <p>is a Business Process Management and Consulting firm that specializes in offshore services with offices in Australia, India and USA. We help clients across the globe in getting their work done in finance domain. Our vibrant and skillful team in India can provide you with a range of services. We are passionate about what we do while focusing on quality of work and attention to detail.</p>
            </div>
        </div>
    )
}
