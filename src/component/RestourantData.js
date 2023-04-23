import React from "react";
import { RestaurantsData } from "./utils/utils";
import { useState } from "react";
// import { useParams } from "react-router-dom";
const RestourantData = (props) => {
    // const [data, setData] = useState(props.location.state.data);
    // const data = props.location.state.data;
    // const { id }  = useParams()
    return (
        <div className="RestourantData w-3/4 mx-auto my-4 rounded-2xl p-4 flex gap-8 bg-stone-200">
            <img src="https://source.unsplash.com/1600x800/?indian-food " className="w-2/4 rounded-xl" />
            <div className="RestourantDataParent ">

                <div className="RestourantData_left">
                    <h1 className=" font-bold text-5xl uppercase">panjabi dhaba</h1>
                    <p className="text-xl">chicken cooked in a rich buttery tomato sauce </p>            
                </div>
                <div className="RestourantData_right bg-white p-4 rounded-xl">
                    <h4 className="text-2xl font-semibold">foodName</h4>
                    <ul>

                    <p> nulldeliveryTime mins </p>
                    <p>4.8⭐</p>
                    <h4>₹300 prize for single</h4>
                    <p>75 delivery Charges</p>
                    <p>veg  </p>
                    <h3>{props.name}</h3>
                    {/* <p>///{id}</p> */}
                    </ul>
                </div>

            </div>
            {/* <RestourantData name={RestaurantsData.name  } /> */}
        </div>
    )
}

export default RestourantData;   