import { useState } from 'react'
import login from './Login'
// import logout from './Logout'
import { Link } from 'react-router-dom'
const LogBtnContainer = () => {
    const [counter, setCounter] = useState('login')
    // var value = true


    return (
        <>
            <Link
                onClick={() => {
                    if (counter === 'login') {
                        setCounter('logout')
                    }
                    else {
                        setCounter('login')
                    }
                }}
                to='/login'
                className='LogBtnContainer'
            >{counter}</Link>
        </>
    )
}

export default LogBtnContainer;