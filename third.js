function createPatient(name, ssn) { 
    const PII = { 
        name: name, 
        SSN: ssn }; 


return { 
    getName: function() {
         return PII.name; }, 
    getSSN: function() { 
        return "Access Denied";
    } 
 }; 
} 

const patient2 = createPatient("John", "123-45-6789"); 
console.log(patient2.name); 
console.log(patient2.ssn); 
console.log(patient2.getName());
 console.log(patient2.getSSN());