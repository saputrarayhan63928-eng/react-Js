function Child({ name}){
    console.log("Children renderend");
    
    return(
        <>
        <div style={{ border: "2px solid blue", marginTop: "10px" }}>
            <h3>Child Component</h3>
            <p>Name : {name}</p>
        </div>
        </>
    )
}

export default Child