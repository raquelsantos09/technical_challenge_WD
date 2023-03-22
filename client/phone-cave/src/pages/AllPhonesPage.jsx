import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom";


function AllPhonesPage() {

  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {                               
        axios
            .get("http://localhost:5005/phones")
            .then((response) => {
                console.log('response.data', response.data);
                setPhones(response.data)
            });

    }, []);  

  return (
    <>
    <h1>All Phones List</h1>
    {phones.map(phone => {
      return (
        <div key={phone.id} className="PhoneCard">
              <Link to={`/${phone.id}`}>
              <h2>{phone.name}</h2>
              </Link>
          <img src={`../assets/images/${phone.imageFileName}`} alt={phone.name} />
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Color: {phone.color}</p>
          <p>Price: {phone.price}€</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram}</p>
        </div>
      )
    })}
    </>
  )
}

export default AllPhonesPage
