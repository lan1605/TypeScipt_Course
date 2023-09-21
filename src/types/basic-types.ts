// Đọc ghi chú ở file Types.md
// Ví dụ 1
let myName: string; // myName chỉ nhận các giá trị là chuỗi
let meaning: number;
let isLoading: boolean;
let album: any;

meaning = 1;
isLoading = false;
// Ví dụ 2

// const sum = (a, b) => {
//   return a + b;
// };
// Cách khắc phục
const sum = (a: number, b: number) => {
  return a + b;
};
