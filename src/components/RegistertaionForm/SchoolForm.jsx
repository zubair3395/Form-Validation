import React from "react";
import { useState } from "react";
import { useForm } from "../FormValidation/SchoolFormValidation/useForm";
import { validation } from "../FormValidation/SchoolFormValidation/validation";
function SchoolForm() {
  const {handlegetData, submitData, schoolStd, error} = useForm(validation)
  const [school, setSchool] = useState("pakistan");
  const [resultType, setResultType] = useState("cgpa");
  const [cgpa, setCgpa] = useState("");
  console.log(resultType);
  const handleResultType = (e) => {
    const { value , name} = e.target;
    handlegetData({target: {value: value, name:name}})
    setResultType(value);
  };
  const handleResult = (e) => {
    const { value, name } = e.target;
    handlegetData({target: {value:value, name:name}})
    if (resultType === "cgpa") {
      if (value > 0 && value <= 4) {
        setCgpa(value);
      }
      else {
            setCgpa("");
      } 
    }
    else if (resultType ==="percentage") {
        if (value>=0) {
          setCgpa(value);
        }
      }
      else{
        setCgpa("")
      }
  };
  const handlePakistan = () => {
    setSchool("pakistan");
  };
  const handleInternational = () => {
    setSchool("international");
  };

  return (
    <div className="container">
      <h1 className="m-0">School</h1>
      <div class="form-check form-check-inline my-5">
        <input
          class="form-check-input"
          type="radio"
          name=""
          onClick={handlePakistan}
          checked={school === "pakistan" ? true : false}
        />
        <label class="form-check-label" htmlFor="">
          Pakistan
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name=""
          onClick={handleInternational}
          checked={school === "international" ? true : false}
        />
        <label class="form-check-label" htmlFor="">
          International
        </label>
      </div>
      {school === "pakistan" ? (
        <div>
        <select class="form-select my-2" onChange={ handlegetData} name="schoolName" value={schoolStd.schoolName}>
          <option >School</option>
          <option value="School1">School1</option>
          <option value="School2">School2</option>
        </select>
        { error.schoolName && <p className="text-danger">{error.schoolName}</p>}
        </div>
      ) : (
        <div>
        <input type="text" className="form-control my-2" placeholder="School" onChange={ handlegetData} name="schoolName" value={schoolStd.schoolName}/>
        { error.schoolName && <p className="text-danger">{error.schoolName}</p>}
        </div>
      )}
      <select class="form-select my-2" onChange={ handlegetData} name="qualification" value={schoolStd.qualification}>
        <option>Qualification</option>
        <option value="Bsc">Bsc</option>
        <option value="Bscs">BsCs</option>
      </select>
      { error.qualification && <p className="text-danger">{error.qualification}</p>}
      <select class="form-select my-2" onChange={handleResultType} name="qualification" value={resultType}>
        <option>Result type</option>
        <option value="percentage">percentage</option>
        <option value="cgpa">cgpa</option>
      </select>
      { error.resultType && <p className="text-danger">{error.resultType}</p>}
      <input
        type="number"
        className="form-control my-2"
        placeholder="Enter your result"
        value={cgpa}
        onChange={handleResult}
        name="marks"
      />
      { error.marks && <p className="text-danger">{error.marks}</p>}
      <label htmlFor="">From Date</label>
      <input type="date" className="form-control my-2" onChange={ handlegetData} name="fromDate" value={schoolStd.fromDate}/>
      { error.fromDate && <p className="text-danger">{error.fromDate}</p>}
      <label htmlFor="">Expected</label>
      <input type="date" className="form-control my-2" onChange={ handlegetData} name="expectedDate" value={schoolStd.expectedDate}/>
      { error.expectedDate && <p className="text-danger">{error.expectedDate}</p>}
      <button className="btn btn-success my-3" onClick={submitData}>Save</button>
    </div>
  );
}

export default SchoolForm;
