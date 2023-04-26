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
            <div className='searchBox  md:w-4/5 mx-auto md:my-5 text-center  justify-center px-10  bg-white-500  py-4 md:rounded-xl  bg-green-300'>
                <h3 className=" text-xl font-semibold justify-items-center text-left">Search food , restaurant , dishes...</h3>
                <div className="searchBoxFooter flex   gap-3  h-10 justify-items-center" >

                    <input
                        type={"text"}
                        placeholder={"enter text here"}
                        value={textSearch}
                        className=" px-4 py-2 w-2/4  rounded-3xl align-middle justify-items-center  bg-black text-white"
                        onChange={(e) => {
                            return setTextSearch(e.target.value);
                        }}

                    />
                    <button className=" bg-black text-white rounded-3xl px-4 py-2 text-sm inline-block "
                        onClick={() => {

                            const result = FilterFnc(textSearch, arr)

                            console.log(result)
                            setArr(result);
                        }}
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <h3>from your search '{textSearch}' </h3> */}
            <div className=" btnContainer md:w-4/5 m-auto gap-4 flex  bg-neutral-200 p-3 md:rounded-full ">
                <button className='filteredBtn  bg-white rounded-full px-4 py-1 text-sm ' onClick={() => {
                    console.log('rating based filter is called')
                    filterList = RestaurantsData.map(Restourant => Restourant)

                    setArr(filterList)
                    return
                }}>
                    All
                </button >
                <button className='filteredBtn  bg-white  rounded-full px-4 py-1 text-sm ' onClick={() => {
                    console.log('rating based filter is called')
                    filterList = RestaurantsData.filter(Restourant => Restourant.rating > 4)

                    setArr(filterList)
                    return
                }}>
                    top rated⭐
                </button >
                <button className='filteredBtn bg-white  rounded-full px-4 py-1 text-sm' onClick={() => {
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
            <div className='CardsContainer  grid gap-2 md:gap-6  container p-2    grid-cols-2 md:grid-cols-2   lg:grid-cols-3 mx-auto md:my-4 md:p-4 md:w-4/5 md:rounded-2xl  bg-red-200  ' >

                {/* mapping the restounrant component with the length of array  */}
                {
                    arr.map((Restourant) => {

                        return (
                            // to={'/restro'} 

                            <Link key={Restourant.id} name={Restourant.name} data={{ ...Restourant }}>
                                {/* passing the props as resourant array to cards component */}
                                <Cards {...Restourant} key={Restourant.id} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CardsContainer;