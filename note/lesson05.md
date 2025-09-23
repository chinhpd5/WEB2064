# Mảng - Các phương thức làm việc với mảng

Mảng là một kiểu dữ liệu có cấu trúc, dùng để lưu trữ nhiều giá trị trong một biến duy nhất, và các giá trị này được đánh số thứ tự `index` từ 0 trở đi.

```js
let fruits = ["Táo", "Cam", "Chuối"];
console.log(fruits[0]);
```
> Trong `JavaScript`, Mảng có thể chứa các giá trị hỗn hợp: chuỗi, số, boolean, object, v.v.

## Khai báo mảng
```js
let arr1 = [1, 2, 3];        
let arr2 = new Array(4, 5, 6);
```

- `length` : Số phần tử trong mảng
```js
let a = [1, 2, 3];
console.log(a.length); // 3
```
## Các phương thức cơ bản làm việc với mảng

| **Phương thức** | **Chức năng**                                   | **Ví dụ**                                | **Kết quả**      |
| --------------- | ----------------------------------------------- | ---------------------------------------- | ---------------- |
| `push()`        | Thêm phần tử vào cuối                           | `[1,2].push(3)`                          | `[1, 2, 3]`      |
| `pop()`         | Xóa phần tử cuối                                | `[1,2,3].pop()`                          | `[1, 2]`         |
| `shift()`       | Xóa phần tử đầu                                 | `[1,2,3].shift()`                        | `[2, 3]`         |
| `unshift()`     | Thêm phần tử vào đầu                            | `[1,2].unshift(0)`                       | `[0, 1, 2]`      |
| `splice()`      | Xoá/thêm/thay thế phần tử tại vị trí bất kỳ     | `[1,2,3,4].splice(1,2,1.5)`              | `[1, 1.5, 4]`    |
| `slice()`       | Cắt ra một mảng con                             | `[1,2,3,4].slice(1,3)`                   | `[2, 3]`         |
| `indexOf()`     | Tìm vị trí phần tử đầu tiên                     | `[1,2,3].indexOf(2)`                     | `1`              |
| `includes()`    | Kiểm tra mảng có chứa phần tử không             | `[1,2,3].includes(2)`                    | `true`           |
| `join()`        | Gộp mảng thành chuỗi                            | `["a","b","c"].join("-")`                | `"a-b-c"`        |
| `reverse()`     | Đảo ngược thứ tự phần tử                        | `[1,2,3].reverse()`                      | `[3, 2, 1]`      |
| `sort()`        | Sắp xếp (mặc định theo chuỗi)                   | `[10,2,5].sort((a,b)=>a-b)`              | `[2, 5, 10]`     |

## Các phương thức nâng cao làm việc với mảng

```js
const students = [
  { name: "Hà", age: 20, gender: "Nữ", mark: 8.5 },
  { name: "Long", age: 21, gender: "Nam", mark: 6.8 },
  { name: "Trang", age: 19, gender: "Nữ", mark: 9.2 },
  { name: "Minh", age: 22, gender: "Nam", mark: 7.4 },
  { name: "Hương", age: 20, gender: "Nữ", mark: 3.9 }
];
```

### forEach
`forEach()` là một phương thức duyệt qua từng phần tử trong mảng, và thực thi một `logic` cho mỗi phần tử.
> `forEach()` không trả về mảng mới.
```js
array.forEach(function(element, index, array) {
  // hành động thực hiện với mỗi phần tử
});
```
> `element`: phần tử đang xét
> `index` (tùy chọn): chỉ số phần tử
> `array` (tùy chọn): chính mảng gốc

Bài tập
- Sử dụng `forEach()`, in ra kèm theo học lực dựa trên điểm:
+ `>= 8`: Giỏi
+ `>= 6.5`: Khá
+ `< 6.5`: Trung bình

### find
`find()` là phương thức dùng để tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện. Nếu không tìm thấy, nó trả về `undefined`.
```js
array.find(function(element, index, array){
  return // điều kiện;
})
```
Bài tập:
- Tìm sinh viên đầu tiên có giới tính Nam
- Tìm sinh viên đầu tiên có tuổi nhỏ hơn hoặc bằng 19
- Tìm sinh viên có tên `Minh`
- Tìm sinh viên có điểm bằng 10

### every
`every()`: Trả về `true` nếu tất cả phần tử trong mảng thỏa mãn điều kiện, `false` nếu chỉ cần 1 phần tử KHÔNG thỏa mãn điều kiện.
```js
array.every((element, index, array) => {
  return điều_kiện;
});
```
> `every` trả về giá trị `boolean`: `true/false`
> Nếu tất cả phần tử thỏa mãn điều kiện: `true`
> Chỉ cần 1 phần tử KHÔNG thỏa mãn điều kiện: `false` và kết thúc vòng lặp

### some
`some()`: Trả về `true` nếu có ít nhất 1 phần tử thỏa mãn điều kiện, `false` nếu tất cả các phần tử KHÔNG thỏa mãn điều kiện.
```js
array.every((element, index, array) => {
  return điều_kiện;
});
```
> `some` trả về giá trị `boolean`: `true/false`
> Chỉ cần 1 phần từ thỏa mãn điều kiện: `true` và kết thúc vòng lặp
> Nếu tất cả phần tử KHÔNG thỏa mãn điều kiện: `false`

### map
`map()` là một phương thức của mảng trong `JavaScript`, dùng để tạo ra một mảng mới bằng cách biến đổi từng phần tử trong mảng gốc thông qua một hàm. 
```js
array.map((element, index, array) => {
  // trả về giá trị mới cho phần tử đó
  return //logic
});

```
> Luôn trả về một mảng mới thông qua `return` cùng số lượng phần tử.
> Không thay đổi mảng gốc.

Bài tập sử dụng `map()`
- Tạo 1 mảng mới có kiểu sau: `["Hà có điểm 8.5, học lực Giỏi", "Long có điểm 6.8, học lực Khá", ...]`
- Hiển thị danh sách sinh viên ra `table` theo mẫu sau
```html
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>STT</th>
      <th>Họ tên</th>
      <th>Tuổi</th>
      <th>Giới tính</th>
      <th>Điểm</th>
      <th>Học lực</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Hà</td>
      <td>20</td>
      <td>Nam</td>
      <td>8.5</td>
      <td>Giỏi</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Long</td>
      <td>21</td>
      <td>Nam</td>
      <td>6.8</td>
      <td>Khá</td>
    </tr>
  </tbody

``` 
> Gợi ý sử dụng phương thức `join()` để chuyển 1 mảng về 1 chuỗi


### filter
`filter()` là một phương thức giúp lọc ra các phần tử trong mảng thỏa mãn điều kiện cho trước.
```js
array.filter((element, index, array) => {
  return điều_kiện;
});
```
> Nó trả về một mảng mới, chỉ chứa các phần tử đúng điều kiện qua `return`.
> `find` trả về kết quả đầu tiên tìm được
> `filter` trả về 1 mảng chứa các kết quả tìm được (Thỏa mãn điều kiện)

Bài tập:
- Lọc danh sách các sinh viên nữ
- Lọc danh sách sinh viên từ điểm 7
- Lọc sinh viên có tuổi nhỏ hơn hoặc bằng 20

### reduce
`reduce()` là phương thức dùng để rút gọn `(reduce)` một mảng thành một giá trị duy nhất bằng cách lặp qua từng phần tử và tích lũy kết quả.
> Giá trị trả về có thể là:
> + một con số (tổng),
> + một chuỗi,
> + một mảng mới,
> + hoặc thậm chí là một object mới.

```js
array.reduce((accumulator, currentValue, index, array) => {
  return giá_trị_mới;
}, giá_trị_khởi_tạo);
```
> `accumulator`: giá trị tích lũy (giá trị cuối cùng sẽ return)
> `currentValue`: phần tử hiện tại đang duyệt
> `giá_trị_khởi_tạo`: bắt đầu tích lũy từ đâu (nếu không có, `accumulator` = phần tử đầu tiên)

Bài tập:
- Tìm sinh viên có điểm cao nhất
- Tìm sinh viên có điểm thấp nhất
- Đếm số lượng sinh viên Giỏi, Khá, Trung bình và trả về `object` có dạng `{ gioi: 0, kha: 0, tb: 0 }`