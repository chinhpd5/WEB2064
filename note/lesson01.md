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
