import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import {Grid} from '@material-ui/core'

export default function Footer() {
    return (
        <Grid container className="footer" style={{display: 'flex'}}>
            <Grid item className="footer-items">
                <h3 id="info-h3">ABOUT US</h3>
                <div id="hr-1"><hr/></div>
                <p className='footer-p'>We work with top executives to help them make better decisions and deliver the sustainable success they desire. Our team of analysts using their global expertise help companies successfully tackle their greatest challenges.</p>
            </Grid>

            <Grid item className="footer-items">
                <h3 id="info-h3">SOCIAL</h3>
                <hr/>
                <div>            
                        <Link id="footer-items-link" to="#">Facebook</Link><br/>
                        <Link id="footer-items-link" to="#">Instagram</Link><br/>
                        <Link id="footer-items-link" to="/login">Login</Link>
                </div>
            </Grid>
                
                
            <Grid item className="footer-items">
                <div>
                    <h3 id="info-h3">CONTACT US</h3>
                    <hr/>
                    <h5 id="footer-items-link">
                            254 5th Street<br/>
                            San Francisco<br/>
                            CA 94103<br/>
                    </h5>
                    <Link to="#" id="footer-items-link">hello@zendentalsf.com</Link>
                        
                </div>
            </Grid>
        </Grid>
    )
}
