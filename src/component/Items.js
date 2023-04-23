import { Link } from "react-router-dom";
// import { useState } from "react";
import LogBtnContainer from './LogBtnContainer'
import useOnline from './utils/useOnline'
import { useSelector } from 'react-redux'
import store from "./utils/store";

const Items = () => {
    // const [counter , setCounter]=useState(null)

    // if(counter === null){setCounter(<Link to='/login' >login</Link>)}
    // else{ setCounter(<Link to='/logout' >logout</Link>)}



    const onlineStatus = useOnline()

    const cartItems = useSelector(() => store.getState().cart.items)

    console.log(cartItems)

    return (
        <div className='flex text-xl text-color-red    text-white'>

            <li className=' px-2 text-base  hover:text-red-400 cursor-pointer flex' >
                <Link to={'/cart'} className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:underline" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {cartItems.length > 0 ?
                        <span className="bg-lime-400 text-black rounded-full font-semibold px-2 hover:underline">   {cartItems.length}  </span> : <span> </span>}
                </Link>
            </li>
            <li className='px-2 text-base hover:underline  hover:text-red-400'><Link to='/about'  >about</Link> </li>
            <li className=' px-2 text-base hover:underline  hover:text-red-400' ><Link to='/contact' >contact</Link> </li>
            {/* <li> <Link to='/' >profile</Link></li> */}
            {/* <li>    <Link to='/login' >login</Link></li> */}
            <li className=' px-2 text-base  hover:underline  hover:text-red-400'> <LogBtnContainer />  </li>
            <li className='text-base '> {onlineStatus == false ? '🔴' : '🟢'} </li>

        </div>
    )
}
export default Items;