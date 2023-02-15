export function validation(employee) {
    let errors = {};
  
    if (!employee.jobTitle) {
      errors.jobTitle = 'Job Title is Required';
    } 
    else if(!(/^[a-zA-Z]+$/.test(employee.jobTitle))){
        errors.jobTitle= "Numeric values are not allowed"
    }
   
    if (!employee.city) {
      errors.city = 'City is required';
    } 
    else if(!(/^[a-zA-Z]+$/.test(employee.city))){
        errors.city= "Numeric values are not allowed"
    }
    if(!employee.country){
      errors.country = 'Country is required';
    }
    if(!employee.company){
        errors.company = 'Company is required';
      }
      else if(!(/^[a-zA-Z]+$/.test(employee.company))){
        errors.company= "Numeric values are not allowed"
    }
    if(!employee.fromDate){
      errors.fromDate= " From  Date is required "
    }
    if(!employee.expectedDate){
      errors.expectedDate= "Expected Date is required"
    }
    if(!employee.qualification){
      errors.qualification= "Qualification is required"
    }
    return errors;
  }
  