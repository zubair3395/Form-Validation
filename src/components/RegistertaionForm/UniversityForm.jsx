import React, { useState } from "react";
import {useForm} from "../FormValidation/UniversityFormValidation/useForm";
import { validation } from "../FormValidation/UniversityFormValidation/validation";
const UniversityForm = () => {
    const { handlegetData, submitData, uniStd, error} = useForm(validation)
  const [univerity, setUniversity] = useState("pakistan");
  const [cgpa, setCgpa] = useState("");
  const handleCGPA = (e) => {
    let {value} = e.target
      handlegetData({target: {value:e.target.value, name:e.target.name}})
    if(value>0 && value<=4){
        setCgpa(value);
    }
    else{
      setCgpa("");
    }
    
  };
  const handlePakistan = () => {
    setUniversity("pakistan");
  };
  const handleInternational = () => {
    setUniversity("international");
  };
  return (
    <div className="container">
      <h1 className="m-0">University</h1>
      <div class="form-check form-check-inline my-5">
        <input
          class="form-check-input"
          type="radio"
          name=""
          onClick={handlePakistan}
          checked={univerity === "pakistan" ? true : false}
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
          checked={univerity === "international" ? true : false}
        />
        <label class="form-check-label" htmlFor="">
          International
        </label>
      </div>
      {univerity === "pakistan" ? (
        <div>
        <select class="form-select my-2" name="universityName" value={uniStd?.universityName} onChange={ handlegetData}>
          <option value="university">University</option>
          <option value="University2">University2</option>
          <option value="University3">University3</option>
        </select>
        { error.universityName && <p className="text-danger">{error.universityName}</p>}
        </div>
      ) : (
        <div>
        <input
          type="text"
          className="form-control my-2"
          placeholder="University"
          name="universityName"
          value={uniStd.universityName}
          onChange={ handlegetData}
        />
         { error.universityName && <p className="text-danger">{error.universityName}</p>}
        </div>
      )}
      <select class="form-select my-2" onChange={ handlegetData} name="qualification" value={uniStd.qualification}>
        <option>Qualification</option>
        <option value="BSc">Bsc</option>
        <option value="BsCS">BsCs</option>
      </select>
      { error.qualification && <p className="text-danger">{error.qualification}</p>}
      <select class="form-select my-2" onChange={ handlegetData} name="areaOfStudy" value={uniStd.areaOfStudy}>
        <option selected>Area of Study</option>
        <option value="ist">IST</option>
        <option value="bwp">bwp</option>
      </select>
      { error.areaOfStudy && <p className="text-danger">{error.areaOfStudy}</p>}
      <input
        type="number"
        className="form-control my-2"
        placeholder="Enter your CGPA"
        value={cgpa}
        name="cgpa"
        onChange={handleCGPA}
      />
       { error.cgpa && <p className="text-danger">{error.cgpa}</p>}
      <label htmlFor="">From Date</label>
      <input type="date" className="form-control my-2" name="fromDate" value={uniStd.fromDate} onChange={ handlegetData}/>
      { error.fromDate && <p className="text-danger">{error.fromDate}</p>}
      <label htmlFor="">Expected</label>
      <input type="date" className="form-control my-2" name="expectedDate" value={uniStd.expectedDate} onChange={ handlegetData}/>
      { error.expectedDate && <p className="text-danger">{error.expectedDate}</p>}
      <button className="btn btn-success my-3" onClick={submitData}>Save</button>
    </div>
  );
};

export default UniversityForm;
