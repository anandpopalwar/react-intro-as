import React from "react";
import { RestaurantsData } from "./utils/utils";
// import { useParams } from "react-router-dom";
const RestourantData = (props) => {
    
    // const { id }  = useParams()
    return (
        <div className="RestourantData">
            <img src="https://source.unsplash.com/1600x800/?indian-food" />
            <div className="RestourantDataParent">

                <div className="RestourantData_left">
                    <h1>panjabi dhaba</h1>
                    <p>hicken cooked in a rich buttery tomato sauce
                    </p>                </div>
                <div className="RestourantData_right">
                    <h4>///foodName</h4>
                    <p> null///deliveryTime mins </p>
                    <p>///4.8⭐</p>
                    <h4>///₹300 prize for single</h4>
                    <p>///75 delivery Charges</p>
                    <p>///veg </p>
                    <h3>///{props.name}</h3>
                    {/* <p>///{id}</p> */}
                </div>

            </div>
            {/* <RestourantData name={RestaurantsData.name  } /> */}
        </div>
    )
}

export default RestourantData;   