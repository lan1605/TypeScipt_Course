"use strict";
let stringArr = ["one", "key", "Dave"];
let guitars = ["Strat", 15]; // Tuple
let mixedData = ["Dave", 12];
// stringArr.push(42);//Sai
// stringArr.push("demo");//đúng
console.log((mixedData = guitars));
let test = [];
let bands = ["1"];
bands.push("2");
mixedData = guitars;
/* Không thể gán vì mảng guitars đã cố định số lượng phần tử là 2, còn mảng
 mixedData tuy chỉ mới khai báo 2 phần tử và vị trí phần tử giống với guitars nhưng nó không bị giới hạn số lượng phần tử
 vì vậy mảng đó vẫn có thể thêm phần tử mới và bao gồm luôn kiểu dữ liệu của guitars
 */
