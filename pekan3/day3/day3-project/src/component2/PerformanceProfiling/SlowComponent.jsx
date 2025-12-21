function SlowComponent({ count}){
    console.log("Expensive calculation running");
    
    let total = 0;
    for(let i = 0; i <  50_000_000; i++) {
    total += count;
  }

  return(
    <div>
        <p>Slow Component Result: {total}</p>
    </div>
  )
}

export default SlowComponent