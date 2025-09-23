# DOM - Document Object Model

`DOM` là một tiêu chuẩn do `W3C` `(World Wide Web Consortium)` định nghĩa, dùng để biểu diễn cấu trúc của một trang web dưới dạng cây các đối tượng (object).

Nói cách khác:
`DOM` biến toàn bộ nội dung `HTML` thành một cây các đối tượng mà `JavaScript` có thể truy cập và thay đổi.

![alt text](image.png)

## DOM gồm 3 thành phần chính
- `Element` (`node` - nút): Mỗi phần tử `HTML` là một `element` `(node)` (ví dụ: thẻ `<p>`, `<div>`, `văn bản`, `comment`...)

- `Attribute` (thuộc tính): Là các thuộc tính của phần tử `HTML` như `id`, `class`, `src`, `style`...

- `Text`: Đại diện cho nội dung chữ nằm giữa thẻ mở và đóng `HTML`.'
```html
<p id="demo" class="pragraph">Xin chào!</p>
<!-- 
  <p></p> là Element 
  id, class là Attribute
  Xin chào! là Text
--> 
```

## Element - Thẻ HTML - phần tử
- Đại diện cho các thẻ `HTML` như `<h1>`, `<p>`, `<div>`, `<img>`, v.v.
- Mỗi phần tử `HTML` sẽ được trình duyệt "dịch" thành một đối tượng `JavaScript` để bạn có thể truy cập và thao tác.

```html
<h1 id="title">Lập trình JavaScript Nâng cao</h1>

<p class="paragraph">JavaScript là ngôn ngữ lập</p>
<p class="paragraph">Nó có thể tính toán, xử lý và xác thực dữ liệu</p>
<p class="paragraph">Nó có thể cập nhật và thay đổi cả HTML và CSS.</p>
```

### Cách lấy phần tử (Truy cập Element)
- id, class, tag
- css selector

```js
// id
let element = document.getElementById("title");

// class
let listClass = document.getElementsByClassName("paragraph");

// tag
var listTag = document.getElementsByTagName('p');
```

```js
// css selector

// id (#)
var element = document.querySelector('#title');

// class (.)
var element = document.querySelector('.paragraph');

// tag
var element = document.querySelector('h1');

// querySelectorAll
var paras = document.querySelectorAll('.paragraph');
```

### Cách thêm phần tử mới
- Dùng `createElement` và `appendChild`
```js
let newP = document.createElement("p"); // tạo phần tử mới
newP.textContent = "Nội dung thêm mới";
document.body.appendChild(newP); // thêm vào cuối body
```

### Cách xóa phần tử
- Dùng `removeChild()`
```js
let parent = document.getElementById("container");
let child = document.getElementById("info");
parent.removeChild(child);
```
- Dùng `element.remove()` (cách ngắn gọn hơn, trình duyệt mới)
```js
document.getElementById("info").remove();
```

### Bài tập
Tạo một trang HTML đơn giản như sau:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bài tập DOM</title>
</head>
<body>
  <h1>Danh sách học viên</h1>

  <ul id="student-list">
    <li>Nguyễn Văn A</li>
    <li>Trần Thị B</li>
  </ul>

  <input type="text" id="student-name" placeholder="Nhập tên học viên mới">
  <button onclick="addStudent()">Thêm học viên</button>
  <button onclick="removeLastStudent()">Xoá học viên cuối cùng</button>

  <script src="script.js"></script>
</body>
</html>
```
Yêu cầu:
- Lấy danh sách học viên.
- Thêm học viên mới khi nhấn nút "Thêm học viên".
> Gợi ý lấy giá trị trong ô input thông qua thuộc tính `.value`
> Nâng cao (Cộng điểm): Khi thêm Kiểm tra trùng tên trước khi thêm mới
- Xoá học viên cuối cùng trong danh sách.

---
## Attribute - thuộc tính
`Attribute` (thuộc tính) là những thông tin bổ sung cho phần tử `HTML`, nằm bên trong thẻ mở.
```js
<img src="image.png" alt="Ảnh DOM" width="300">
<a id="link" href="https://example.com" target="_blank">Trang web</a>
```
> Trong đó:
> - src, alt, width là attribute
> - "hinh.jpg", "Ảnh đẹp", "300" là giá trị của attribute

### Lấy giá trị thuộc tính
```js
let link = document.getElementById("link");
let href = link.getAttribute("href"); // "https://example.com"
```

### Thêm mới hoặc sửa giá trị thuộc tính
```js
link.setAttribute("href", "https://caodang.fpt.edu.vn/"); // cập nhật lại href
link.setAttribute("class", "btn btn-primary");   // thêm class mới

let img = document.querySelector("img");
img.src = "new-image.jpg"; // cách này nhanh và dễ nhớ
img.alt = "Ảnh thay thế";
```
> Nếu attribute chưa tồn tại → sẽ được thêm mới
> Nếu đã tồn tại → sẽ bị ghi đè

### Xoá thuộc tính

```js
link.removeAttribute("target");
```
### Bài tập
Tạo một trang web có một bức ảnh và một đường link. Thực hiện các hành động thay đổi thuộc tính ảnh và liên kết khi bấm nút.

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Thực hành Attribute</title>
</head>
<body>
  <h2>Ảnh đại diện</h2>
  <img id="avatar" src="avatar1.jpg" alt="Ảnh 1" width="200"><br><br>

  <a id="profile-link" href="https://facebook.com" target="_blank">Đi tới Facebook</a><br><br>

  <button onclick="changeAvatar()">Đổi ảnh</button>
  <button onclick="toggleBorder()">Thêm/Xoá viền</button>
  <button onclick="changeLink()">Đổi liên kết</button>
  <button onclick="removeAlt()">Xoá thuộc tính alt</button>

  <script src="script.js"></script>
</body>
</html>
```
Yêu cầu:
- Đổi thuộc tính `src` để đổi ảnh
- Thêm hoặc xoá viền bằng `style` hoặc `class`
- Thay đổi đường dẫn liên kết (`href`) và nội dung
- Xoá thuộc tính `alt` của ảnh

## Text
- `Text` là nội dung văn bản bên trong các phần tử `HTML` (`Element`).
- `DOM` xem phần chữ như một đối tượng riêng, không phải là phần tử.

```html
<p>Xin chào!</p>
```
> Thẻ `<p>` là `Element`
> Nội dung `Xin chào!` là `Text`

### Lấy nội dung văn bản

```js
let h1 = document.getElementById("title");
let text = h1.textContent;
console.log(text);
```

### Sửa nội dung văn bản
```js
h1.textContent = "Chào bạn!";
```

### Thêm văn bản (nối chuỗi)
```js
h1.textContent += " - Học lập trình ngay!";
```

### Sử dụng innerHTML để thêm html vào giao diện
```js
divElement.innerHtml = `<h1>Heading 1</h1>`
```

### Bài tập:
Tạo một trang hiển thị tiêu đề và nút. Khi bấm nút sẽ đổi nội dung chữ hoặc thêm văn bản mới.
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bài tập Text</title>
</head>
<body>
  <h2 id="greeting">Xin chào sinh viên FPoly!</h2>

  <button onclick="changeText()">Đổi lời chào</button>
  <button onclick="addText()">Thêm câu khích lệ</button>

  <script src="script.js"></script>
</body>
</html>
```
Yêu cầu: 
- Đổi nội dung văn bản sang: "Chào bạn, chúc bạn học tốt!".
- Thêm câu động viên vào cuối dòng: "Bạn là người tuyệt vời!"

## Bài tập tổng hợp
Tạo giao diện HTML như sau:
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Thông tin sản phẩm</title>
</head>
<body>
  <div id="product-card">
    <h2 id="product-name">iPhone 15 Pro</h2>
    <img id="product-img" src="iphone.jpg" alt="iPhone" width="200"><br>
    <p id="product-price">Giá: 28.000.000đ</p>
  </div>


  <button onclick="changeName()">Đổi tên sản phẩm</button>
  <button onclick="changeImage()">Đổi ảnh</button>
  <button onclick="hideProduct()">Ẩn sản phẩm</button>
  <button onclick="showProduct()">Hiện sản phẩm</button>

  <script src="script.js"></script>
</body>
</html>
```

Yêu cầu khi click vào các nút bấm sẽ thực hiện:
- Đổi tên sản phẩm thành `iPhone 15 Ultra Max Pro Max`
- Đổi ảnh sản phẩm sang ảnh khác
- Ẩn/hiện toàn bộ sản phẩm