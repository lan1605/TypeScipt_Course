<!-- Kiểu dữ liệu trong TS -->

- Gồm 10 kiểu dữ liệu: boolean, number, string, array, tuple, enum, union, object, any, unknown.
- Cách khai báo biến có kiểu dữ liệu: <"từ khóa (var, let, const)"> <"tên biến">: <"kiểu dữ liệu"> = <"giá trị">
- Rê chuột vào tên biến để thấy gợi ý của intellisense (bao gồm kiểu dữ liệu, từ khóa, tên biến).
- Biến đã được gán kiểu dữ liệu cụ thể thì không thể nhận các giá trị khác kiểu dữ liệu đó (chỉ ở TS, còn JS vẫn được biên dịch mà không bị lỗi khác kiểu dữ liệu).
    <!--  -->
        1. Kiểu dữ liệu cơ bản
        - Với kiểu dữ liệu là "any" thì biến nào có kiểu dữ liệu này có thể nhận được giá trị của bất kì kiểu dữ liệu nào.
        - Có thể gán nhiều kiểu dữ liệu cho biến bằng cách ngăn cách các kiểu dữ liệu bằng dấu "|".
        Ví dụ: let album: string | number; (Biến album chỉ nhận các giá trị có kiểu dữ liệu là chuỗi và số)
    <!-- Giải thích các ví dụ  -->
    <!-- Ví dụ 2 -->
        - Trong hàm sum, biến a và b không được gán kiểu dữ liệu, TS đã tự hiểu 2 biến này thuộc kiểu any, vì vậy khi được truyền tham số, cả hai có thể được nhận giá trị của bất kì dữ kiệu nào. Và khi biên dịch sang JS vẫn cho ra kết quả mà không bị lỗi gì. Tuy nhiên bên TS vẫn đánh dấu 2 biến đó có lỗi.
        => Cách khắc phục: thêm kiểu dữ liệu cho 2 biến
    <!--  -->
        2. Mảng
        - Mảng có thể chứa 1 hoặc nhiều kiểu dữ liệu. Có thể khai báo mảng hoặc chỉ gán giá trị cho mảng (TS sẽ tự hiểu mảng đó chứa được giá trị của kiểu dữ liệu nào). Khi đã xác định mảng đó có kiểu dữ liệu gì thì không thể nhận các giá trị có kiểu dữ liệu khác (khi này TS sẽ báo lỗi nếu giá trị mới truyền vào trong mảng không giống kiểu dữ liệu)
        - Khi gán mảng khác, chỉ cần mảng khác có 1 kiểu dữ liệu mà trong mảng được gán không có thì TS sẽ báo lỗi (nhung JS vẫn nhận được biên dịch và trả về kết quả là mảng được gán có giá trị của mảng khác).
        - Mảng mà cố định số phần tử mà mỗi phần tử có kiểu dữ liệu khác nhau được gọi là Tuple. Khi so sánh Tuple với các mảng khác, có thể sẽ báo lỗi, vì mảng Tuple đã cố định số lượng phần tử cũng như vị trí phần tử có kiểu dữ liệu gì.
        - Có thể thay thế giá trị của phần tử, miễn sao có cùng kiểu dữ liệu mà mảng đó đã được khai báo.
    <!--  -->
        3. Đối tượng (Object)
        - Để gán giá trị mới cho key trong object, cần phải đúng kiểu dữ liệu (nếu không TS sẽ báo lỗi)
    <!--  -->
        4. Type aliases (Type nâng cao)
        - Với type aliases, chúng ta có thể tạo tên mới cho một type nhưng chúng ta không define một type mới.
        - Khi đã có 1 type aliases, việc gán giá trị khác cho 1 key khác không có trong type aliases, TS sẽ báo lỗi
        - Có thể tạo được Union Type (vd: type healthy = 'heart' | 'weight'). Tuy nhiên có 2 lưu ý khi sử dụng Union Type:
            * Không thể extends cho 1 interface với 1 type
            * Không thể implements cho 1 lớp
        - Có thể dùng type cho các dự án quy mô nhỏ.
        5. Interface
        - Dùng để định nghĩa 1 type mới
        - Dùng như 1 function (function type)
        - Tạo ra array type
        - Interface có thể extends 1 interface khác
        - Class nào được implement với interface thì phải khai báo đủ các hàm và thuộc tính trong interface.
        Có 2 thuộc tính trong Interface:
            * Thuộc tính tùy chọn (Option property): có thể chỉ định 1 thuộc tính nào đó thành thuộc tính tùy chọn  (thêm dấu ?), interface có thể định nghĩa nó hoặc là không
            * Thuộc tính readonly: Không thể gán bất cứ giá trị nào khác cho thuộc tính đó.
        - Interface thích hợp cho các dự án lớn (vì interface có thể làm được mọi thứ mà type có thể làm)
