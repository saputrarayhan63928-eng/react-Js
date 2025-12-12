import { useState,useEffect } from "react";
import axios from "axios";

function DisplayFetchAxioo() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

useEffect(() =>{
    const AmbilData =  async () =>{
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            setData(response.data)
        } catch(err){
            setError(err)
        } finally{
            setLoading(false)
        }
    }

    AmbilData()
},[])

if(loading) return <p>Sedang Memuat Data</p>
if(error) return <p>Terjadi kesalahan: {error.message}</p>

return(
    <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
        <h2>Data dari Axios</h2>
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Telepon: {data.phone}</p>
    </div>
)
}

export default DisplayFetchAxioo

