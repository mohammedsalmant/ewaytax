import React, { Component } from 'react';
import "./Home.css"
import Carousel from  './Carousel'
import Card from '../services/Cards'
import Map from './map'
import Footer from '../footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <Carousel/><br/>
                <Card />
                <Map />
            </div>
        )
    }
}
