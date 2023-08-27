import React from 'react'
import { Link } from 'react-router-dom'; 
import { useEffect,useState } from 'react';
import axios from 'axios'
import './Home.css'

export default function Home() {
    const [response,setresponse] = useState([])
    useEffect(() =>{
        const fetchitems = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setresponse(response.data)
        }
        fetchitems();
        },[]);
  return (
    <div>
    <h1 id='Home'>Home</h1>
    <div className="container">
        
        {
            response.map((item)=>{
            return(
                <div className="item" key={item.packId}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/412/690/small/fitness-logo-template-gym-club-logotype-sportsman-silhouette-character-logo-design-template-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-vector.jpg"/>
                <p>Name : {item.name}</p>
                <p>Duration : {item.duration}</p>
                <Link to={`/Order?item=${item.packId}`}><button>Order</button></Link>
                </div>
            )
            })
        }

    </div>
    </div>
  )
}
