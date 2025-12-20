import { useEffect, useState } from "react";

function UseLocalStorage (key , initialValue){
    const [value , setValue] = useState(() => {
        try{
        const stored = localStorage.getItem(key)
        return stored !== null ? JSON.parse(stored) : initialValue   
        } catch{
            return initialValue
        }
    })

    useEffect(() =>{
        try{
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error){
            console.error("LocalStorage Error : ", error)
        }
    } ,[key,value])

    return [value , setValue]
}

export default UseLocalStorage