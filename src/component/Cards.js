import { useState } from "react";
import { RestaurantsData } from "./utils/utils";
import RestourantData from "./RestourantData";
import React from "react";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "./utils/CartSlice";

const Cards = (restaurant) => {
    // const {key}=cardItems
    let [res, setRes] = useState()

    let { name, description, rating, id, imgURL, distance, dishes, avgPrize } = restaurant
    function show() {

        dishes.map((e) => {

            return (

                console.log(e.dishName, 'prize :', e.dishPrice, 'rating :', e.avgRating)

            )

        })
        setRes(dishes.dishName)
        redirect('/restro', name = { name })
        // return <RestourantData  name={restaurant.name} />
    }

    const dispatch = useDispatch()

    const eventHandler = (item) => {
        dispatch(addItems(item))
        console.log(item.name)
    };


    return (
        <div className='Cards p-2 rounded-xl border-transparent  bg-white   border-2  hover:border-green-500  '  name={name} key={id}>
            <img src={imgURL} className="rounded-xl md:h-52 w-full  object-cover" alt="image to be loaded" />
            <div className='CardsDiscription'>
                <div className="miniFlex flex justify-between ">
                    <h4 className="  md:text-xl font-bold justify-center">{name}</h4>
                    {/* <p>{cardItems.veg = cardItems.veg == true ? " veg 🟢": " non-veg 🔴"}</p> */}
                    <p className="justify-center">{rating}⭐</p>
                </div>
                <div className="otherDisc ">

                    <p className=" h-22 text-xs md:text-sm text-stone-500 ">{description}</p>
                    <h4 className="font-semibold md:text-sm text-xs" >{distance} mins away</h4>
                    <div  className="flex">
                    <button className="  w-full font-bold px-4 mt-2 text-sm rounded-xl md:text-lg " > ₹ {avgPrize} </button>
                    <button className="  w-full font-bold bg-lime-300 px-4 mt-2 text-sm rounded-xl md:text-lg " onClick={() => eventHandler({...restaurant})} > add </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards;

{/* <div>
    popular dishes -
    {dishes.map((e) => {
        return (
            <>
                <li key={e.id} className=" h-22 text-sm text-stone-500 ml-8 ">{e.dishName} </li>

            </>
        )
    })
    }
</div> */}