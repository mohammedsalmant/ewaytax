import React,{useState, useEffect} from 'react'
import Input from '@material-ui/core/Input';
import Axios from 'axios'
import cookie from 'js-cookie'
import {useHistory} from 'react-router-dom'
import './Login.css'

export default function Dashboard() {
    const [message, setmessage] = useState()
    const history = useHistory()
    const [images, setImages] = useState()
    const [file, setFile] = useState()

    useEffect(() => {
        const token =cookie.get('token')
        if(token===undefined){
            history.push('/login')
        }
        Axios.get('http://multivendorappbackend.herokuapp.com/homeCarousel')
                .then(response=> {
                    setImages(response.data.category)
                })
       }, [])


    return (
        <div className="dashboard">
            <h6 id="dashboard-h6">Upload the image here</h6>
            <input 
                type="file" 
                onChange={(event)=> {
                    const image = event.target.files[0] 
                    setFile(image)
                }}
            />
            <button 
                onClick={()=> {
                    console.log(file)
                    const data= new FormData()
                    data.append("carouselImage", file)
                    Axios.post('http://multivendorappbackend.herokuapp.com/homeCarousel/',data)
                        .then(response=>{
                            console.log(response.data);
                            alert("Image added")
                            history.go(0)
                        })
                        .catch(err=> {
                            console.log(err)
                        })
                }}
            
            >
                UPLOAD
            </button>

            <div className="dashboard-img">
                {images===undefined ? null : (
                    images.map((item)=> (
                    <div className="dashboard-img-single">
                        <img src={'http://multivendorappbackend.herokuapp.com/'+item.carouselImage}/>
                        <button className="dashboard-img-button" 
                            onClick={()=>{
                                Axios.delete('http://multivendorappbackend.herokuapp.com/homeCarousel/'+item._id)
                                    .then(response=> {
                                        alert('Image deleted')
                                        history.go(0)
                                        console.log(response.data)
                                    })
                                    .catch(err=> {
                                        console.log(err)
                                    })
                                console.log(item._id)
                            }}
                        >
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    
                ))
                )}
            </div>

            <h6>Scrolling Text here:</h6>
            <input type="text" style={{margin:"2%"}} /><button>SUBMIT</button><br/>

            <button
             onClick={()=>{
                cookie.remove('token')
                history.push("/login")
                }}
            >
                Log out
            </button>
        </div>
    )
}
