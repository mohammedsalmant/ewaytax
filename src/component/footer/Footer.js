import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import {Grid} from '@material-ui/core'

export default function Footer() {
    return (
        <Grid container className="footer" style={{display: 'flex'}}>
            <Grid item className="footer-items" xs={12} sm={4} >
                <h3 id="info-h3">ABOUT US</h3>
                {/* <div id="hr-1"><hr/></div> */}
                <p className='footer-p'>We work with top executives to help them make better decisions and deliver the sustainable success they desire. Our team of analysts using their global expertise help companies successfully tackle their greatest challenges.</p>
            </Grid>

            <Grid item className="footer-items"  xs={12} sm={4}>
                <div className="footer-middle">
                    <h3 id="info-h3">SOCIAL</h3>
                    {/* <hr/> */}
                    <div>    
                            <a id="footer-items-link" href="https://www.facebook.com/eway.tax.9" target="_blank"><i class="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Facebook</a><br/>
                            <a id="footer-items-link" href="https://www.facebook.com/ewaytax/" target="_blank"><i class="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Facebook</a><br/>
                            <a id="footer-items-link" href="https://www.instagram.com/ewaytax/?igshid=rqye4w8yhjzj" target="_blank"><i class="fab fa-instagram"></i>&nbsp;&nbsp;Instagram</a><br/>
                            <a id="footer-items-link" href="https://twitter.com/ewaytax" target="_blank"><i class="fab fa-twitter"></i>&nbsp;&nbsp;Twitter</a><br/>
                            <Link id="footer-items-link" to="/login"><i class="fas fa-users-cog"></i>&nbsp;&nbsp;Login</Link>
                    </div>
                </div>
            </Grid>
                
                
            <Grid item className="footer-items"  xs={12} sm={4}>
                <div>
                    <h3 id="info-h3">CONTACT US</h3 >
                    {/* <hr/> */}
                    <h5 id="footer-items-link">
                        <i class="fas fa-map-marker-alt"></i>
                        &nbsp;&nbsp;Eway Tax GST Consultancy <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PADAPPARAMBA Paravath complex,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Padapparamba, Pang Thora Road,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kerala,PIN-676507 <br/>
                    </h5>
                    <h5  id="footer-items-link"><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;+91 7025 145 125</h5>
                    <Link to="#" id="footer-items-link"><i class="fas fa-envelope"></i>&nbsp;&nbsp;ewaytax@gmail.com</Link>
                        
                </div>
            </Grid>
        </Grid>
    )
}
