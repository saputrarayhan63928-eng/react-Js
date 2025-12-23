import useAPI from "../hooks/useAPI";
import ProductCard from "../component/ProductCard";


function Product(){
    const {data,loading,error} = useAPI("https://fakestoreapi.com/products")

    if(loading) return <p>Loading Data.............</p>
    if(error) return <p> Error : {error}</p>
    if(!data) return <p>Data Kosong!</p>

    return(
        <div className="product-grid">
            {data.map(p =>{
                return <ProductCard key={p.id} product={p}/>
            })}
        </div>
    )
}

export default Product