import { Link } from "react-router-dom";
import { useState } from "react";
import LogBtnContainer from './LogBtnContainer'
import useOnline from './utils/useOnline'

const Items = () => {
    // const [counter , setCounter]=useState(null)

    // if(counter === null){
    //     setCounter(<Link to='/login' >login</Link>)
    // }
    // else{
    //     setCounter(<Link to='/logout' >logout</Link>)
    // }

    const onlineStatus = useOnline()

    return (
        <div className='item_container'>
     
            <li><Link to='/about' >about</Link> </li>
            <li><Link to='/contact' >contact</Link> </li>
            {/* <li> <Link to='/' >profile</Link></li> */}
            {/* <li>    <Link to='/login' >login</Link></li> */}
            <li> <LogBtnContainer />  </li>
            <li> {onlineStatus==false ? '🔴' :'🟢'} </li>

            

         

        </div>
    )
}
export default Items;