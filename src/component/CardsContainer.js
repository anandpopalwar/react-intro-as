import { useEffect, useState } from "react";
import Cards from "./Cards";
// import arr from "./utils/utils";
import { RestaurantsData } from "./utils/utils";
import { Link } from "react-router-dom";
import useOnline from './utils/useOnline'



function FilterFnc(textSearch, arr) {
    console.log(textSearch, arr)
    const resultArr = arr.filter((card) => {

        card?.foodName?.includes(textSearch)

    })
    return resultArr;

}

const CardsContainer = () => {

    const [arr, setArr] = useState(RestaurantsData)
    const [textSearch, setTextSearch] = useState()

    // useEffect(() => {
    //     getRestrounts()
    // }, [])

    // async function getRestrounts(){
    //     const res =   await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.087591&lng=73.0059052&page_type=DESKTOP_WEB_LISTING')  
    //     const data =  await res.json()
    //     console.log(data)
    //     setArr(data?.data?.cards[2]?.data?.data?.cards)
    // }

    // const online = useOnline()
    // if(!online) {
    //     return <div className="onlineStatus">
    //     <h2> 🥵ohh...offline</h2>
    //     <p>looks like you are offline check your connection and then comeback...</p>
    //     </div>
    // }


    const onlineStatus = useOnline()
    if (onlineStatus === false) {
        return <div className="onlineStatus">
            <h2> 🥵ohh...offline</h2>
            <p>looks like you are offline check your connection and then comeback...</p>
        </div>
    }


    return (
        <div className='parentCardContainer'>
            {/* <h3> from restaurant royal cusine</h3> */}
            <div className='searchBox'>
                <h3>Search food , restaurant , dishes...</h3>
                <div className="searchBoxFooter">

                    <input type={"text"} placeholder={"enter text here"} value={textSearch} onChange={(e) => {
                        return setTextSearch(e.target.value);
                    }}

                    />
                    <button
                        onClick={() => {

                            const result = FilterFnc(textSearch, arr)

                            console.log(result)
                            setArr(result);
                        }}
                    >🔎FIND</button>
                </div>
            </div>

            {/* <h3>from your search '{textSearch}' </h3> */}
            <div className=" btnContainer">
                <button className='filteredBtn' onClick={() => {
                    console.log('rating based filter is called')
                    filterList = RestaurantsData.filter(Restourant => Restourant.rating > 4)

                    setArr(filterList)
                    return
                }}>
                    top rated⭐
                </button >
                <button className='filteredBtn' onClick={() => {
                    filterList = RestaurantsData.filter(Restourant => Restourant.distance < 2)
                    setArr(filterList)
                    console.log('filtered the near you list')
                    return
                }}>
                    near you🛵
                </button>
                {/* <button className='filteredBtn' onClick={() => {
                    filterList = arr.filter(Restourant => Restourant.sweets == true)
                    setArr(filterList)
                    console.log('del time')
                    return
                }}>
                    sweets😋
                </button> */}
            </div>
            <div className='CardsContainer'>

                {/* mapping the restounrant component with the length of array  */}
                {
                    arr.map((Restourant) => {

                        return (

                            <Link key={Restourant.id} name={Restourant.name}  >
                                {/* passing the props as resourant array to cards component */}
                                <Cards {...Restourant} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CardsContainer;