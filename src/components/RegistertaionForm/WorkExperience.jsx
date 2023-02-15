import React, { useState } from 'react'
import { useForm } from '../FormValidation/WorkFormValidation/useForm';
import { validation } from '../FormValidation/WorkFormValidation/validation';
function WorkExperience() {
  const {handlegetData, submitData, employee, error} = useForm(validation);
    const [isWork, setIsWork] = useState(false);
    const handleWork= ()=>{
        if(isWork){
            setIsWork(false)
        }
        else{
            setIsWork(true);
        }
    }
  return (
    <div className="container">
    <h1 className="m-0">Work Experience</h1>
     <div style={{marginTop: "120px"}}>
   <input type="text"  className='form-control my-2' placeholder='job title' onChange={ handlegetData} name="jobTitle" value={employee.jobTitle}/>
   { error.jobTitle && <p className="text-danger">{error.jobTitle}</p>}
   <input type="text"  className='form-control my-2' placeholder='Company'onChange={ handlegetData} name="company" value={employee.company}/>
   { error.company && <p className="text-danger">{error.company}</p>}
<select class="form-select my-2" onChange={ handlegetData} name="country" value={employee.country}>
<option>Country</option>
<option value="pakistan">Pakistan</option>
<option value="india">India</option>
</select>
{ error.country && <p className="text-danger">{error.country}</p>}
<input type="text" className="form-control my-2" placeholder="City" onChange={ handlegetData} name="city" value={employee.city}/>
{ error.city && <p className="text-danger">{error.city}</p>}
<label htmlFor="">From Date</label>
<input type="date" className="form-control my-2" onChange={ handlegetData} name="fromDate" value={employee.fromDate}/> 
{ error.fromDate && <p className="text-danger">{error.fromDate}</p>}
<div class="form-check">
  <input class="form-check-input" type="checkbox" onChange={handleWork} checked={isWork ? true : false}/>
  <label class="form-check-label">
    I am currently work here
  </label>
</div>

{
  !isWork? <div>  <label htmlFor="">Expected</label>
  <input type="date" className="form-control my-2" onChange={ handlegetData} name="expectedDate" value={employee.expectedDate}/> 
  { error.expectedDate && <p className="text-danger">{error.expectedDate}</p>}
    </div> : ""
}

<button className="btn btn-success my-3" onClick={submitData}>Save</button>
</div>     
  </div>
  )
}

export default WorkExperience
