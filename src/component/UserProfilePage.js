import { useContext, useRef } from "react";
import UserContext from "./utils/UserContext";
import { Link } from "react-router-dom";


const UserProfilePage = () => {
    const { user, setUser } = useContext(UserContext)

    const dataInput = useRef('')
    const emailInput = useRef('')
    const phoneInput = useRef('')
    const genderInput = useRef('')


    const consoleHandler = () => {
        const Name = dataInput.current.value;
        const email = emailInput.current.value;
        const phone = phoneInput.current.value;
        // const gender = genderInput.current.value;

        setUser({ firstName: Name, email: email, phone: phone })
        // console.log({firstName})
    }
    return (

        <div className="w-2/4 mx-auto my-4 border-black  bg-black text-white   rounded-lg p-8">
            {/* <img className="rounded-full  w-2/4 mx-auto my-4 md:w-2/5 justify-center border-4  border-stone-400 p-4" src={user.profileURL} /> */}
            <div>name :  {user.firstName} {user.LastName}  <input ref={dataInput} className="text-black rounded-md justify-center mx-auto my-1" />
            </div>
            <div> email : {user.email} <input ref={emailInput} className="text-black rounded-md justify-center mx-auto my-1" />
            </div>
            <div> number : {user.phone}  <input ref={phoneInput} className="text-black rounded-md justify-center mx-auto my-1" />
            </div>
            <div> gender : {user.gender === 'male' ? '🚹male' : '🚺female'} </div>
            <Link to='/login ' className="hover:underline  text-red-600 font-bold float-right"> logout</Link>

            {/* <input ref={genderInput} type='radio'  className="text-black rounded-md justify-center mx-auto my-1" /> */}


            <button onClick={consoleHandler} className="bg-red-400 px-4 py-1 rounded-md text-center"> save </button>
        </div>
    )
}

export default UserProfilePage;
// onChange={e=>e.target.value}