import {  useState } from "react";
export const useForm = (validation)=>{
    const [schoolStd, setSchoolStd] = useState({
       schoolName: "",
       qualification: "",
       resultType: "",
       marks: "",
       fromDate: "",
       expectedDate:""
    })
    const [error, setError] = useState({})
    
    const handlegetData=(event)=>{
         setSchoolStd({...schoolStd, [event.target.name]:event.target.value})
    }
    const submitData= (event)=>{
        event.preventDefault()  
        setError(validation(schoolStd))
    }
    return {handlegetData, submitData, schoolStd, error}
}