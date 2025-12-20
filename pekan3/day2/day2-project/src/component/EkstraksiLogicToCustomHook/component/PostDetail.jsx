import useFetch from "../hooks/useFetch";

function PostDetail (){
    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts/7")

    if(loading) return <p>Loading.........</p>
    if(error) return <p>Error : {error}</p>
    if (!data) return <p>Data Kosong</p>

    return(
        <>
        <div>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
        </>
    )
}

export default PostDetail;