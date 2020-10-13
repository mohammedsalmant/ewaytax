import React from 'react'
import {CardItems} from './CardItems';
import {Grid} from '@material-ui/core'
import './Services.css'

export default function Cards() {
    return (
        <div className="container">
            <h2 className="serviceHead">OUR BEST SERVICES</h2>
            <Grid container className="cards" style={{display: 'flex'}}>
                {CardItems.map((item)=>(
                <Grid item className="cardItem" style={{margin:'39px'}} xs={12} md={3} sm={4}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                    </div>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}
