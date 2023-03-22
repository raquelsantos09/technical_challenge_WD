import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function PhoneDetails() {
const { phoneId } = useParams();
const [phoneDetails, setPhoneDetails] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5005/phones/${phoneId}`)
            .then((response) => {
                console.log('response.data', response.data);
                setPhoneDetails(response.data)
            });

    }, []);  

  return (
    <div>
          <h1>Phone Details</h1>
          <h2>{phoneDetails}</h2>

    
    </div>
  )
}

export default PhoneDetails