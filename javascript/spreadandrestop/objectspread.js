let eid={id:101,
    ename:"rahul",
    sal:45000
}
//creating new object
let eids={...eid}
console.log(eids);
//merging two object
let eid1={email:"rg@gmail.com"}
let eids1={...eid,...eid1}
console.log(eids1);
//extending
let eids2={...eid,address:"New Delhi"}
console.log(eids2);