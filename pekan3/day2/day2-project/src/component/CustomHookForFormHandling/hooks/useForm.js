import { useState } from "react";

function useForm(initialValue){
    const [values,setValues] = useState(initialValue)

    function handleChange(event){
        const { name, value} = event.target

        setValues(prevValues => ({
            ...prevValues, [name] : value
        }))
    }

    function resetForm (){
        setValues(initialValue)
    }

    return{
        values,
        handleChange,
        resetForm,
    }
}

export default useForm;