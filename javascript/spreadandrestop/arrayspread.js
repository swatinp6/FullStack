//spread operator=>extract array elements and copy into new array
let eids=[101,102,103,104]
//create new array
let eids5=[...eids]
console.log(eids5);
let eids1=[102,103,104,105,106]
//merging two arrays
let eids3=[...eids,...eids1]
console.log(eids3);
//extending
let eids4=[...eids1,100,120,130]
console.log(eids4);