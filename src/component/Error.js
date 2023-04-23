import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const {status,statusText,data}  = useRouteError() 

    // console.log(err)
    return (
        <div className="w-3/4 bg-black text-white mx-auto my-4 p-4"> 
            <h1 className="font-bold text-3xl">Oops... </h1>
            <p>somthing went wrong</p>
            <h2>{status} : {statusText}</h2>
            <p>{data} </p>
        </div>
    )
}

export default NotFound;