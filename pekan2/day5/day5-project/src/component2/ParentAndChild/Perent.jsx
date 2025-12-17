import InputNama from "./Child/ChildA";
import DisplayNama from "./Child/ChildB";
import { useState } from "react";

function PerentComponent () {
    const [nama, setNama] = useState("")

    return(
        <div>
            <h2>Berbagi State Antar Sibling</h2>
            <InputNama nama={nama} onNamaChange={setNama}/>
            <DisplayNama nama={nama} />
        </div>
    )
}

export default PerentComponent