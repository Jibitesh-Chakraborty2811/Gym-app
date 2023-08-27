import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Order() {
    const location = useLocation();
    const item = new URLSearchParams(location.search).get('item');

    const[name,setname] = useState("");
    const[address,setaddress] = useState("");

    const addsubs = async (e) =>{
        //e.preventDefault();
        const response = await axios.post('http://localhost:5000/addSubscription',{name:name,address:address,packId:item});

    }
  return (
    <div>
        <h1>Order</h1>
        <p>Ordering: PackId : {item}</p>
        <form>
            <p>Name :</p>
            <input type='text' placeholder='Enter Your Name' onChange={(event)=>{setname(event.target.value)}}/>
            <p>Address :</p>
            <input type='text' placeholder='Enter Your Address'onChange={(event)=>{setaddress(event.target.value)}}/>
            <br></br>
            <br></br>
            <button onClick={addsubs}>Place Order</button>
        </form>
    </div>
  )
}
