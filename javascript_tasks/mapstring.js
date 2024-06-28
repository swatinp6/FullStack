const students=["rajesh","preeti","raju","manju"];
const studentsUpper=students.map(upperCase);
console.log(students);
console.log(studentsUpper);
 function upperCase(element){
    return element.toUpperCase();
 }

 function capitializefirst(element){
    return element.charAt(0).toUpperCase()+element.slice(1);
 }
 const studentsCapitalize=students.map(capitializefirst);
 console.log(studentsCapitalize);