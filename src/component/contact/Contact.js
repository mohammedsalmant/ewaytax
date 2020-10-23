import { Grid } from '@material-ui/core'
import React from 'react'
import './Contact.css'
import Map from '../home/map'

export default function Contact() {
    return (
        <div>
            <div className="about-container">
                <img className="about-img" src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80" alt=""/>
                <div className="about-head">SERVICES</div>
            </div>
            <Grid container className="contact-container">
                <Grid item id="contact-item" xs={12} sm={4}>
                    <img className="contact-img" src="https://www.flaticon.com/svg/static/icons/svg/929/929568.svg"/>
                    <div className="contact-item-1">
                        <h5>Visit Our Office</h5>
                        <h6>Eway Tax GST Consultancy<br/>
                            PADAPPARAMBA Paravath complex,<br/>
                            Padapparamba, Pang Thora Road,<br/>
                            Kerala,PIN-676507
                        </h6>
                    </div>    
                </Grid>
                <Grid item id="contact-item" xs={12} sm={4}>
                    <img className="contact-img" src="https://www.flaticon.com/svg/static/icons/svg/1034/1034131.svg"/>
                    <div className="contact-item-1">
                        <h5>Give Us A Call</h5>
                        <h6>+91 7025 145 125</h6>
                    </div>
                </Grid>
                <Grid item id="contact-item" xs={12} sm={4}>
                    <img className="contact-img" src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg"/>
                    <div className="contact-item-1">
                        <h5>Send Your Mail</h5>
                        <h6>ewaytax@gmail.com</h6>
                    </div>
                </Grid>
            </Grid>            
        

            <Map />

        </div>
    )
}
