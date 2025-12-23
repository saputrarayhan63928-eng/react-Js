import { useState,useEffect } from "react";

function useFetch (url){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() =>{
        if(!url) return;

        const controller = new AbortController

        async function useFetchData(){
            try{
                setLoading(true)
                setError(null)

                const response = await fetch(url,{
                    signal: controller.signal
                })

                if(!response.ok){
                    throw new Error("Request Error")
                }

                const result = await response.json()
                setData(result)
            } catch(err){
                if(err.name !== "AbortError"){
                    setError(err.message)
                }
            } finally{
                setLoading(false)
            }
        }
        useFetchData()

        return() => controller.abort()
    },[url])

    return {data,loading,error}
}

export default useFetch