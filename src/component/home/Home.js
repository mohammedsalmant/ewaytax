import React, { Component } from 'react';
import "./Home.css"
import Carousel from  './Carousel'
import Card from '../services/Cards'
import Map from './map'
import { Grid } from '@material-ui/core';

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <Carousel/><br/>
                
                <Grid container className="home-about">
                    <Grid item className="about-left" xs={12} sm={6}>
                        <img id="about-img" src="https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg" alt="Aboutus"/>
                    </Grid>
                    <Grid item className="about-right" xs={12} sm={6}>
                        <h2 id="about-h2">ABOUT US</h2>
                        <p id="about-p1">Ewaytax offers high value-added business consulting solutions to enterprises of all sizes. Ewaytax
                            Business Consulting Services utilises the professional challenges to work for multiple enterprises
                            across the globe in order to provide value additions to their business in multiple ways. While working
                            with us you have the opportunity to develop deep expertise in all areas and across multiple sectors. 
                            Ewaytax is a highly professional group managed by expert consultants. The unique culture allows for 
                            appreciation of different perspectives and methodologies.
                        </p>
                        <button id="about-btn"><a id="about-btn-link" href="/about">ABOUT US</a></button>
                    </Grid>
                </Grid>


                <Card />
                <Map />
            </div>
        )
    }
}
