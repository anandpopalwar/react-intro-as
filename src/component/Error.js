import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const {status,statusText,data}  = useRouteError() 

    // console.log(err)
    return (
        <div>
            <h1>Oops... </h1>
            <p>somthing went wrong</p>
            <h2>{status} : {statusText}</h2>
            <p>{data} </p>
        </div>
    )
}

export default NotFound;