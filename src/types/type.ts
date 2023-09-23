type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};
// thêm ? trước khi gán kiểu dữ liệu cho 1 key nào đó thì khi sử dụng type aliases, có thể không gọi tên key đó ra mà không bị báo lỗi => thuộc tính tùy chọn (Option property)
let evh: Guitarist = {
  name: "Dave",
  active: true,
  albums: ["1", 2, 3],
};
console.log(evh.name);
type healthy = "heart" | "weight";
let demo: healthy = "heart"; // Union Type
