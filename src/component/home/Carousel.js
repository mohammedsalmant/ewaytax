import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    render() {
        return (
            <div>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">

                            <div className="item active">
                                <img src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg" alt="Chicago"/>
                                <div class="carousel-caption">
                                <h3>Los Angeles</h3>
                                <p>LA is always so much fun!</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg" alt="Chicago"/>
                            <div class="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                            </div>
                        </div>
                        
                        <div className="item">
                            <img src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg" alt="New York"/>
                            <div class="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                            </div>
                        </div>
                    
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

        )
    }
}

export default Carousel