# Lesson 1: Ôn tập kiến thức cơ bản về JavaScript

## 1. Khai báo biến
### Lý thuyết
- `var`: khai báo theo cách cũ, có hoisting.
- `let`: khai báo trong `block`, có thể thay đổi giá trị.
- `const`: khai báo trong `block`, KHÔNG thay đổi giá trị (với kiểu dữ liệu `primitive`)

```js
var myName = 'chinhpd5';
let myAge = 20;
const myGender = true;
```

## Quy tắc đặt tên biến
- Tên biến phân biệt chữ hoa và chữ thường.
- Không bắt đầu bằng số.
- Không chứa khoảng trắng hoặc ký tự đặc biệt (ngoại trừ `_` và `$`).
- Kiểu đặt `PascalCase`, `camelCase`, `snake_case`, `kebab-case`
> `Pascal Case`: 
> + Các từ được viết liền nhau không có dấu cách hoặc dấu gạch dưới (_)
> + Chữ cái đầu của mỗi từ đều được viết hoa.
> + Ví dụ: `StudentName`, `UserAccountManager`, ...

> `Camel Case`:
> + Từ đầu tiên viết thường toàn bộ.
> + Chữ cái đầu tiên của mỗi từ tiếp theo được viết hoa.
> + Ví dụ: `studentName`, `userAccountManager`, ...

### Hoisting
`Hoisting` là cơ chế trong `JavaScript` mà trình thông dịch sẽ “kéo” các khai báo biến và hàm lên đầu phạm vi thực thi (scope) trước khi chạy code.
- Với `var` và `function`: chỉ phần khai báo được `hoisting`, không phải phần gán giá trị.
- Với `let` và `const`: cũng được `hoisting` nhưng không thể truy cập trước khi khai báo vì nằm trong `Temporal Dead Zone (TDZ)`.
- Hoisting xảy ra trong phạm vi `function` hoặc `global`, tuỳ vào nơi biến/hàm được khai báo.

```js
// với từ khóa var
console.log(a); // undefined
var a = 5;

// với function
sayHi(); // Lập trình JavaScript Nâng cao
function sayHi() {
  console.log("Lập trình JavaScript Nâng cao");
}

console.log(b); // Lỗi: ReferenceError
let b = 10;
```

### Phạm vi (scope)
- `Global scope`: Biến được khai báo bên ngoài tất cả hàm và khối mã. Có thể truy cập từ bất kỳ đâu trong chương trình.

Ví dụ:
```js
// Global scope:
var num1;

{
  num1 = 1;
  console.log(num1); 
}

console.log(num1);
```

- `Block scope`: Biến khai báo bằng `let` hoặc `const` trong cặp `{}` (if-else, switch-case, for,...) sẽ chỉ tồn tại trong khối đó.

```js
// Block scope
{
  let num2 = 2; 
  console.log(num2);
}

console.log(num2);
```
- `Function (local) scope`: Biến khai báo bằng `var` hoặc bất kỳ biến nào bên trong một hàm chỉ dùng được trong chính hàm đó.

```js
// Function scope
function testNum() {
  var num3 = 3;
}

console.log(num3);
```

## 2.Kiểu dữ liệu (Data Types)
### A. Kiểu dữ liệu nguyên thủy (Primitive Types)
Là các giá trị đơn giản, không thể thay đổi `(immutable)`, gồm:

| Kiểu          | Mô tả                                    | Ví dụ                   |
| ------------- | ---------------------------------------- | ----------------------- |
| **String**    | Chuỗi văn bản                            | `"Hello"`, `'JS'`       |
| **Number**    | Số (cả số nguyên và số thực)             | `10`, `3.14`            |
| **Boolean**   | Đúng hoặc sai                            | `true`, `false`         |
| **Undefined** | Biến đã khai báo nhưng chưa gán giá trị  | `let x;`                |
| **Null**      | Đại diện cho "không có giá trị"          | `let y = null;`         |
| **BigInt**    | Số nguyên rất lớn (ES2020)               | `12345678901234567890n` |
| **Symbol**    | Giá trị duy nhất, thường dùng làm key ẩn | `Symbol("id")`          |

### B. Kiểu dữ liệu phức tạp - tham chiếu (Reference Types)
Là các đối tượng phức tạp, lưu theo địa chỉ bộ nhớ:

| Kiểu                             | Mô tả                        | Ví dụ                     |
| -------------------------------- | ---------------------------- | ------------------------- |
| **Object**                       | Tập hợp các cặp key-value    | `{ name: "JS", age: 25 }` |
| **Array**                        | Danh sách các phần tử        | `[1, 2, 3]`               |
| **Function**                     | Hàm (cũng là object)         | `function sayHi() {}`     |
| **Date, RegExp, Map, Set, v.v.** | Các kiểu đặc biệt của object | `new Date()`, `new Map()` |

### Kiểu nguyên thủy - Tham trị
#### 2.1 String - chuỗi
```js
let name = "chinhpd5";
console.log(typeof(name));
```
> Có thể dùng '', "", hoặc `` (template string)
> Hữu ích: `.length`, `.toUpperCase()`, `.includes()`, ...

#### 2.2 Number - số
```js
let age = 21;
const pi = 3.14;
console.log(typeof(age));
```
> Dùng cho cả số nguyên và số thực
> `NaN`, `Infinity` cũng là kiểu `number`

#### 2.3 Boolean - đúng/sai
```js
let gender = true;
console.log(typeof(gender));
```
> Dùng trong điều kiện logic

#### 2.4 Undefined
```js
let x;
console.log(x); // undefined
console.log(typeof(x));
```
> Biến được khai báo nhưng chưa gán giá trị

#### 2.5 Null
```js
let user = null;
console.log(user);
console.log(typeof(user)); //object
```
> Giá trị rỗng “có chủ đích”, thường dùng để reset biến

#### 2.6 Symbol (ít dùng, nâng cao)
```js
let id1 = Symbol("userId");
let id2 = Symbol("userId");
console.log(typeof(id1));
console.log(id1 == id2);
```
> Tạo giá trị duy nhất, thường dùng làm `key` trong `object`

#### 2.7 Bigint (ít dùng, nâng cao, ra đời từ phiên bản ES2020)
```js
// Trong JavaScript, kiểu Number dùng chuẩn IEEE-754 và có giới hạn:
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991; 

const big = 9007199254740991n;      // Dùng hậu tố `n`
const big2 = BigInt("90071992547409919999999"); // Dùng hàm BigInt()
console.log(typeof(big)); // "bigint"
```
> BigInt có thể lưu trữ số nguyên lớn vô hạn về mặt lý thuyết
> Toán tử: +, -, *, **, %, >>, <<
> Không dùng chung với Number mà không chuyển đổi

### Kiểu tham chiếu

#### 2.8 Object
```js
let person = {
  name: "chinhpd5",
  age: 20
};

console.log(typeof(person));
```
> Lưu trữ dưới dạng cặp `key-value`
> Truy cập qua dấu `.` hoặc `[]`

#### 2.9 Array
```js
let numbers = [1, 2, 3];
let strings = ['Hùng', 'Bình', 'Bắc', 'Long'];

console.log(typeof(numbers)); // object
```
> Danh sách có thứ tự
> Dùng `.push()`, `.forEach()`, `.map()`, `.filter()`,... rất phổ biến

#### 2.9 Function

```js
function greet() {
  console.log("Hello");
}
greet();

console.log(typeof(greet)); // function
```
> Trong JS, function cũng là object
> Có thể gán vào biến, truyền vào hàm khác

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

## 5. Hàm
Hàm `(function)` là một khối mã được định nghĩa để thực hiện một nhiệm vụ cụ thể. Hàm giúp chia nhỏ chương trình thành các phần riêng biệt, dễ đọc, dễ quản lý và tái sử dụng.
Cách đặt tên hàm giống với các đặt tên biến.
>Nên đặt tên hàm theo camelCase

### 5.1. Declaration Function (Khai báo hàm truyền thống)
```js
function tenHam() {
  // nội dung hàm
}

tenham();
```
> + Có thể gọi trước khi khai báo (do hoisting).
> + Là cách khai báo truyền thống và rõ ràng.
> Ví dụ:
```js
sayHello();

function sayHello() {
  console.log("Hello world!");
}
```
#### Tham số trong hàm (parameter)
Tham số là biến được khai báo trong định nghĩa của hàm. Khi bạn gọi hàm, bạn sẽ truyền đối số `(argument)` vào các tham số này để hàm xử lý.
> Tham số `(parameter)`: Là biến định nghĩa trong hàm.
> Đối số `(argument)`: Là giá trị thực tế được truyền vào khi gọi hàm.
```js
function tinhTong(a, b) {   // a và b là THAM SỐ
  console.log(a + b); // Kết quả: 8
}

tinhTong(5, 3); // 5 và 3 là ĐỐI SỐ
```

#### return trong hàm
Trả về giá trị từ một hàm.
```js
function tinhTong(a, b) {
  return a + b; // trả về tổng của a và b
}
let kq = tinhTong(3, 5);
console.log(kq); //8
```
> Khi `return` được gọi: 
> + Hàm dừng lại ngay lập tức.
```js
function test() {
  console.log("Bắt đầu");
  return;
  console.log("Dòng này sẽ không chạy");
}
test(); // Chỉ in "Bắt đầu"
```
> + Giá trị đi sau `return` sẽ được trả về cho nơi gọi hàm.
```js
function tinhTong(a, b) {
  return 10;
  return a + b; // trả về tổng của a và b
}
let kq = tinhTong(3, 5);
console.log(kq); 10
```

### 5.2. Expression Function (Hàm gán cho biến)

```js
const tenHam = function(thamSo1, thamSo2) {
  // nội dung
  return giaTri;
};
tenHam();
```
> + Không thể gọi trước khi khai báo.

### 5.3. Arrow Function*
```js
const tenHam = (thamSo1, thamSo2) => {
  // nội dung
  return giaTri;
};
tenHam();
```

Viết ngắn gọn hơn nếu chỉ có 1 dòng return:
```js
const add = (a, b) => a + b;
```