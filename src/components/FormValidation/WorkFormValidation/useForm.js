import {  useState } from "react";
export const useForm = (validation)=>{
    const [employee, setEmployee] = useState({
       jobTitle: "",
       company: "",
       country: "",
       city: "",
       fromDate: "",
       expectedDate:""
    })
    const [error, setError] = useState({})
    
    const handlegetData=(event)=>{
         setEmployee({...employee, [event.target.name]:event.target.value})
    }
    const submitData= (event)=>{
        event.preventDefault()  
        console.log(employee)
        setError(validation(employee))
    }
    return {handlegetData, submitData, employee, error}
}