//Validate Indian Mobile Number using RegularExpression?
//How to construct Regular Expression
function validateIndianMobileNumber(number) {
    const regex = /^[6-9]\d{9}$/;    //regular expression
    return regex.test(number);
}

// Test cases
console.log(validateIndianMobileNumber("9876543210")); 
console.log(validateIndianMobileNumber("1234567890")); 
console.log(validateIndianMobileNumber("8765432190")); 
console.log(validateIndianMobileNumber("91234567890")); 
