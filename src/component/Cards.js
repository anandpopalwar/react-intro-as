import { useState } from "react";
import { RestaurantsData } from "./utils/utils";
import RestourantData from "./RestourantData";
import React from "react";
import { redirect } from "react-router-dom";

const Cards = (restaurant) => {
    // const {key}=cardItems
    let [res, setRes] = useState()

    let { name, description, rating, id, imgURL, distance, dishes } = restaurant
    function show() {
      
        dishes.map((e) => {
            return (

                console.log(e.dishName, 'prize :', e.dishPrice, 'rating :', e.avgRating)
            )

        })
         setRes(dishes.dishName)
         redirect('/restro',name={name})
        // return <RestourantData  name={restaurant.name} />
    }


    return (
        <div className='Cards' key={id} onClick={show} name={name}>
            <img src={imgURL} />
            <div className='CardsDiscription'>
                <div className="miniFlex">
                    <h4>{name}</h4>
                    {/* <p>{cardItems.veg = cardItems.veg == true ? " veg 🟢": " non-veg 🔴"}</p> */}
                    <p>{rating}⭐</p>
                </div>
                <div className="otherDisc">
                    <p>{description}</p>
                    <h4>{distance} mins</h4>
                </div>
            </div>
        </div>
    )
}

export default Cards;