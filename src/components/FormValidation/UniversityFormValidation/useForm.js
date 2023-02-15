import {  useState } from "react";
export const useForm = (validation)=>{
    const [uniStd, setUniStd] = useState({
       universityName: "",
       qualification: "",
       areaOfStudy: "",
       cgpa: "",
       fromDate: "",
       expectedDate:""
    })
    const [error, setError] = useState({})
    
    const handlegetData=(event)=>{
         setUniStd({...uniStd, [event.target.name]:event.target.value})
    }
    const submitData= (event)=>{
        event.preventDefault()  
        setError(validation(uniStd))
    }
    return {handlegetData, submitData, uniStd, error}
}