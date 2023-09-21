<!-- Cài đặt TypeScript -->

1.  Cài đặt nodeJS
2.  Chạy lệnh npm i typescript -g (ở Terminal Command Prompt)
3.  Chạy lệnh tsc --init tạo file tsconfig.json

<!-- Các tùy chỉnh trong file tsconfig.json -->

- "rootDir" thành "rootDir": "./src", (do trong project này đang sử dụng file src làm file chứa cái source Typescript)
- "outDir" thành "outDir": "./build/js" (do trong project này đang sử dụng file js làm file chứa cái source JS được biên dịch từ TS)
- "include": ["src"] (chỉ cho phép biên dịch các file TS trong file src thành file JS)
- "noEmitOnError": true (chỉ cho phép ghi đè lên file JS nếu TS không mắc lỗi nào, vì có 1 số trường hợp bên TS lỗi nhưng bên JS không bị và cho ra kết quả như mong muốn)

<!-- Các chạy biên dịch từ file TypeScript sang JavaScript -->

- tsc main.ts: biên dịch từ file main.ts sang file main.js (không liên tục)
- tsc -w: biên dịch tất cả file TS sang JS có trong thư mục src (liên tục)

<!-- Các dòng lệnh khác của Typescript -->

- tsc --noEmitOnError -w: chỉ cho phép ghi đè lên file JS nếu TS không mắc lỗi nào nếu chỉ muốn thực hiện trong 1 phiên làm việc

<!-- Các lưu ý -->

- Không thể khai báo biến mà thiếu kiểu dữ liệu hoặc giá trị. Nếu không gán kiểu dữ liệu thì TS dựa vào giá trị được gán cho biến đó có thể "ngầm hiểu" biến đó có kiểu dữ liệu gì.
- Vì trình biên dịch chuyển tất cả file TS thành JS, nên sẽ có lỗi biến bị trùng nếu khai báo tên biến giống với file TS khác

<!-- ---------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- Ví dụ 1 -->

- Typescript nhận dạng ra được lỗi không cùng kiểu dữ liệu khi biên dịch, nhưng JS thì vẫn chạy ra kết quả
  => Cách khắc phục: chỉ định kiểu giá trị cụ thể cho từng biến
