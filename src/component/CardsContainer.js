import { useState } from "react";
import Cards from "./Cards";
import arr from "./utils/utils";
import MainObj from "./utils/utils";

// function filterFunc(){(filterData , arr)=>{
//     console.log(filterData , arr)
//     return arr

// }}

const CardsContainer = () => {
    
 

    const [arr, setArr] = useState(MainObj)

    const [textSearch, setTextSearch] = useState()



    return (
        <div className='parentCardContainer'>
            {/* <h3> from restaurant royal cusine</h3> */}
            <div className='searchBox'>
                <h3>Search food , restaurant , dishes...</h3>
                <input type={"text"} placeholder={"enter text here"}   value={textSearch} onChange={(e) => {
                    // const filterData = e.target.value ;
                     setTextSearch(e.target.value);
                    return }} 
            
              />
                <button 
                //  onClick={()=>{
                //     const result = filterFunc(textSearch , arr)
                //     setArr(result)
                // }} 
                >search🔎</button>
            </div>

            <h3>from your search '{textSearch}' </h3>
            <div className=" btnContainer">
                <button className='filteredBtn' onClick={() => {
                    filterList = MainObj.filter(dish => dish.avgrating > 4)
                    setArr(filterList)
                    return
                }}>
                    top rated⭐
                </button >
                <button className='filteredBtn' onClick={() => {
                    filterList = MainObj.filter(dish => dish.veg == false)
                    setArr(filterList)
                    console.log('non veg')
                    return
                }}>
                    non-veg🍗
                </button>
                <button className='filteredBtn' onClick={() => {
                    filterList = MainObj.filter(dish => dish.sweets == true)
                    setArr(filterList)
                    console.log('del time')
                    return
                }}>
                    sweets😋
                </button>
            </div>
            <div className='CardsContainer'>
                {
                    arr.map((Items) => {
                        return (
                            <Cards
                                foodName={Items.dishname}
                                prize={Items.prize}
                                resName={Items.restaurantName}
                                foodImg={Items.imgURL}
                                cusine={Items.foodDisc}
                                key={Items.id}
                                rating={Items.avgrating}
                                cardItems={Items} veg={Items.veg} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CardsContainer;