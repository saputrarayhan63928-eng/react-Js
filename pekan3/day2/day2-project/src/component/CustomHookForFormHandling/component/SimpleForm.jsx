import useForm from "../hooks/useForm";

function SimpleFrom (){
    const { values, handleChange, resetForm,} =  useForm({
        name:"",
        email:""
    })

    return(
        <div>
            <h3>Simple Form</h3>

            <input type="text" name="name" placeholder="Masukkan Nama" value={values.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Masukkan Email" value={values.email} onChange={handleChange} />
            <br /><br />
            <button onClick={resetForm}>Reset</button>
            <hr />

            <h4>Input Preview (Real Time)</h4>
            <p>Nama : {values.name}</p>
            <p>Email : {values.email}</p>
        </div>
    )
}

export default SimpleFrom