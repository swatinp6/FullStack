let employees=[{id:101,name:"Rahul",sal:45000},{id:102,name:"Priyanka",sal:55000}]
let createEmp=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback();

    },4000)
}
let displayData=()=>{
    setTimeout(()=>{
        let rows=" "
        for(emp of employees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
        }
        document.getElementById('abc').innerHTML=rows

    },2000)
}
createEmp({id:103,name:"sonia",sal:75000},displayData)
//displayData()
