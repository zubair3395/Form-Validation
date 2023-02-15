export function validation(schoolStd) {
    let errors = {};
  
    if (!schoolStd.schoolName) {
      errors.schoolName = 'School Name is Required';
    } 
    else if(!(/^[a-zA-Z]+$/.test(schoolStd.schoolName))){
        errors.schoolName= "Numeric values are not allowed"
    }
   
    if (!schoolStd.resultType) {
      errors.resultType = 'Result Type is required';
    } 
    if(!schoolStd.marks){
      errors.marks = 'marks is required';
    }
    if(!schoolStd.fromDate){
      errors.fromDate= " From  Date is required "
    }
    if(!schoolStd.expectedDate){
      errors.expectedDate= "Expected Date is required"
    }
    if(!schoolStd.qualification){
      errors.qualification= "Qualification is required"
    }
    return errors;
  }
  