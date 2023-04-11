import React, { useEffect, useState } from "react";


const useOnline = () =>{
    
    const [isOnline , setIsOnline ] = useState()

    useEffect(()=>{

        
        const onlineHandler = () =>{
            setIsOnline(true)
        }
        
        const offlineHandler = () =>{
            setIsOnline(false)
        }
        
        window.addEventListener('online',onlineHandler)
        window.addEventListener('offline',offlineHandler)
        console.log('event listeners added')


        return()=>{
            window.removeEventListener('online',onlineHandler)
            window.removeEventListener('offline',offlineHandler)
            console.log('event listeners removed')
        }
    },[])

    return isOnline;

}
export default useOnline;