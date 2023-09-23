"use strict";
let myObj;
myObj = [];
console.log(typeof myObj); //object (vì biến myObj đã được gán cho kiểu Object)
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = 12; // prop1 chỉ nhận các giá trị là chuỗi
exampleObj.prop2 = 12; // prop 2 chỉ nhận giá trị T/F
