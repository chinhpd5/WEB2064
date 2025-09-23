# Lesson 3: Ôn tập kiến thức cơ bản về JavaScript (Tiếp)


## 3. Toán tử
### 3.1 Toán tử số học (Arithmetic Operators)
| Toán tử | Ý nghĩa     | Ví dụ    | Kết quả |
| ------- | ----------- | -------- | ------- |
| `+`     | Cộng        | `5 + 3`  | `8`     |
| `-`     | Trừ         | `5 - 2`  | `3`     |
| `*`     | Nhân        | `4 * 2`  | `8`     |
| `/`     | Chia        | `10 / 2` | `5`     |
| `%`     | Chia lấy dư | `10 % 3` | `1`     |
| `**`    | Lũy thừa    | `2 ** 3` | `8`     |


### 3.2 Toán tử gán (Assignment Operators)
| Toán tử | Ý nghĩa      | Ví dụ    | Giải thích           |
| ------- | ------------ | -------- | -------------------- |
| `=`     | Gán          | `x = 10` | Gán giá trị 10 cho x |
| `+=`    | Cộng rồi gán | `x += 5` | `x = x + 5`          |
| `-=`    | Trừ rồi gán  | `x -= 3` | `x = x - 3`          |
| `*=`    | Nhân rồi gán | `x *= 2` | `x = x * 2`          |
| `/=`    | Chia rồi gán | `x /= 2` | `x = x / 2`          |

### 3.3 Toán tử so sánh (Comparison Operators)
| Toán tử | Ý nghĩa             | Ví dụ       | Kết quả |
| ------- | ------------------- | ----------- | ------- |
| `==`    | So sánh bằng (lỏng) | `"5" == 5`  | `true`  |
| `===`   | So sánh bằng (chặt) | `"5" === 5` | `false` |
| `!=`    | Khác (lỏng)         | `"5" != 5`  | `false` |
| `!==`   | Khác (chặt)         | `"5" !== 5` | `true`  |
| `>`     | Lớn hơn             | `6 > 4`     | `true`  |
| `<`     | Nhỏ hơn             | `4 < 2`     | `false` |
| `>=`    | Lớn hơn hoặc bằng   | `5 >= 5`    | `true`  |
| `<=`    | Nhỏ hơn hoặc bằng   | `3 <= 2`    | `false` |

### 3.4 Toán tử logic (Logical Operators)
| Toán tử   | Ý nghĩa        | Ví dụ             | Kết quả   | 
| --------- | -------------- | ------------------| --------- | 
| `&&`      | AND (và)       | `true && false`   | `false`   |
| `\|\|`    | OR (hoặc)      | `true \|\| false` | `true`    |  
| `!`       | NOT (phủ định) | `!true`           | `false`   | 

Bài tập tính nhẩm:
```js
console.log(true && false);
console.log(true || false);
console.log(true && false || true);
console.log(false || false && true);
//
console.log(0 && 1);
console.log(1 || 0);
console.log(null || "Hello");
console.log("Hi" && "JS");
//
let a = 5;
let b = 10;
console.log(a > 3 && b < 20);
console.log(a < 0 || b > 5);
```

## 4. Cú pháp
### 4.1 Điều kiện 

#### If, else if, else
Cấu trúc cơ bản:
```js
if (biểu_thức_điều_kiện) {
  // Thực hiện nếu biểu_thức_điều_kiện là true
} else if (biểu_thức_điều_kiện_khác) {
  // Thực hiện nếu biểu_thức_điều_kiện_khác là true
} else {
  // Thực hiện nếu tất cả các biểu thức điều kiện phía trên đều sai
}
```
> Có thể có nhiều `else if`
> Có thể kết hợp nhiều biểu thức điều kiện thông qua `toán tử logic`: `&&` hoặc `||`
> Biểu thức điều kiện có thể rút ngắn nếu so sánh với `true` hoặc `false`.
Ví dụ:
```js
if(gender == true){}
// có thể viết
if(gender){}
```
Hoặc:
```js
if(gender == false){}
// có thể viết
if(!gender){}
```
Bài tập: Sử dụng câu điều kiện `if...else`, Hiển thị Học lực của sinh viên theo điểm số:
- `0 <= mark < 5` : Yếu
- `5 <= mark < 7` : Trung bình
- `7 <= mark < 9`: Khá
- `9 <= mark < 10`: Giỏi

#### Toán tử ba ngôi (? :)
Cách viết ngắn gọn của `if...else`.
```js
điều_kiện ? biểu_thức/giá_trị_nếu_đúng : biểu_thức/giá_trị_nếu_sai;
```
Ví dụ:
```js
let age = 16;
let result = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(result); // Chưa đủ tuổi
```
Bài tập sử dụng toán tử 3 ngôi để giải quyết bài toán if elseif trên.

#### switch...case
Dùng khi cần kiểm tra nhiều giá trị khác nhau của một biến.
Cú pháp:
```js
switch (biến) {
  case giá_trị_1:
    // Thực hiện nếu biến === giá_trị_1
    break;
  case giá_trị_2:
    // Thực hiện nếu biến === giá_trị_2
    break;
  case giá_trị_3:
    // Thực hiện nếu biến === giá_trị_3
    break;
  default:
    // Nếu không khớp giá trị nào
}
```
> Mỗi `case` nên có `break` để ngăn không cho chương trình tiếp tục chạy các `case` bên dưới.
> Sử dụng `default` để xử lý giá trị không khớp.
> Trong `case` so sánh sử dụng toán tử `===`.
> Có thể nhóm nhiều `case` lại với nhau.
> Chỉ dùng `switch` khi có nhiều giá trị cố định.

Bài tập:
Viết chương trình nhập vào mã xếp loại (A, B, C, D, F) và in ra mô tả học lực tương ứng:
| Mã   | Mô tả        |
| ---- | ------------ |
| A    | Xuất sắc     |
| B    | Giỏi         |
| C    | Khá          |
| D    | Trung bình   |
| F    | Yếu          |
| khác | Không hợp lệ |
> Dùng switch...case
> Không dùng if...else
> Mã xếp loại có thể nhập chữ thường hoặc in hoa → nên chuyển về chữ in hoa trước khi switch
> Gợi ý nhận giá trị nhập từ bàn phím `let grade = prompt("Nhập mã xếp loại (A, B, C, D, F):");`

### 4.2 Vòng lặp
Vòng lặp dùng để lặp lại một đoạn mã nhiều lần.

#### Vòng lặp không biết trước số lần lặp

##### While
Vòng lặp khi điều kiện còn đúng
```js
while (điều_kiện) {
  // Mã sẽ lặp lại khi điều_kiện đúng
}
```

##### Do... while
```js
do {
  // Mã sẽ thực hiện ít nhất 1 lần
} while (điều_kiện);
// nếu điều_kiện trong while đúng mã trong do sẽ được thực hiện lại
```
> Lưu ý sử dụng Lặp vô hạn while hoặc do...while:
> + Luôn đảm bảo điều kiện lặp sẽ có lúc sai (Nếu điều kiện không thay đổi hoặc luôn đúng → gây vòng lặp vô hạn.)
> + Cập nhật biến lặp đúng vị trí (Cập nhật biến lặp `i++`, `i--`,... nên đặt cuối vòng (nếu cần) để tránh bị bỏ sót lần lặp đầu hoặc gây sai số lần.)

#### Vòng lặp biết trước số lần lặp

##### for
Cấu trúc:
```js
for (khởi_tạo; điều_kiện; cập_nhật) {
  // Khối lệnh được thực hiện trong mỗi lần lặp
}
```
Giải thích từng phần:
- khởi_tạo: thường khai báo biến đếm (let i = 0)
- điều_kiện: điều kiện lặp, kiểm tra trước mỗi lần lặp
- cập_nhật: thường tăng/giảm biến đếm (i++)

Ví dụ:
```js
for (let i = 1; i <= 5; i++) {
  console.log("Lần thứ", i);
}
```
> Lưu ý:
> - Luôn đảm bảo điều kiện dừng: Tránh lặp vô hạn nếu điều kiện luôn đúng hoặc biến không thay đổi.
> - Sử dụng `break` và `continue` nếu cần:
>  + `break`: thoát khỏi vòng lặp ngay lập tức.
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    break; // Dừng vòng lặp
  }
  console.log(i); // Chỉ in 1 vì 2 là số chẵn
}
```
>  + `continue`: bỏ qua lần lặp hiện tại, sang lần tiếp theo.
```js
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua phần tử chẵn
  }
  console.log(i); // In: 1, 3, 5
}
```
> Biến thể `for`: `for...of`, `for...in`
> Nâng cao: `forEach`

## Bài tập:
Cho mảng dữ liệu sinh viên:
```js
let students = [
  { name: "An", score: 8 },
  { name: "Bình", score: 4.5 },
  { name: "Chi", score: 6.5 },
  { name: "Dũng", score: 3 },
  { name: "Hà", score: 9 }
];
```
### Yêu cầu 1: In ra danh sách sinh viên và xếp loại theo điểm
- Nếu `score >= 8`: loại `Giỏi`
- Nếu `score >= 5`: loại `Trung bình`
- Nếu `score < 5`: loại `Yếu`
> Sử dụng vòng `for` và `if...else` để in: Ví dụ: ` An - 8 điểm - Giỏi`

### Yêu cầu 2: Đếm số lượng sinh viên theo loại học lực
Sau khi xếp loại, in ra:
- Số sinh viên Giỏi.
- Số sinh viên Trung bình.
- Số sinh viên Yếu.
> Sử dụng `forEach` và `if...else`

### Yêu cầu 3: Tìm sinh viên có điểm cao nhất
> In ra tên và điểm của sinh viên cao điểm nhất
> Sử dụng `for` hoặc `forEach`, Ví dụ: `Sinh viên có điểm cao nhất: Hà - 9 điểm`