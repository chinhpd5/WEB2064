# DOM - Document Object Model (Tiếp)

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