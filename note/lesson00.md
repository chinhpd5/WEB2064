# Lesson 0: Mục tiêu môn học Lập trình JavaScript Nâng cao

## Mục tiêu
- Hiểu và sử dụng được các thành phần nâng cao hơn trong ngôn ngữ Javascript.
- Áp dụng những kiến thức đã học để xây dựng một dự án sử dụng Javascript nâng cao.

---
## Định nghĩa: 
`JavaScript` là một ngôn ngữ lập trình(Thông dịch) phổ biến, được sử dụng chủ yếu để phát triển các trang web.
JS ra đời vào năm 1995; Tính đến nay (2025), JavaScript đã trải qua: 15 phiên bản `ECMAScript` chính thức (từ `ES1` đến `ES15`); Trong đó, `ES6` (2015) là phiên bản bước ngoặt lớn nhất trong lịch sử `JavaScript`.

> Ngôn ngữ biên dịch: Là ngôn ngữ mà mã nguồn được biên dịch toàn bộ thành mã máy trước khi chạy thông qua trình biên dịch `(compiler)`. Kết quả là một tệp thực thi `(.exe, .out, …)`. Ví dụ: `C`, `C++`, `Go`, `Rust`, `Java`, ...

> Ngôn ngữ thông dịch: Là ngôn ngữ mà mã nguồn không được biên dịch thành mã máy ngay lập tức. Thay vào đó, một chương trình thông dịch `(interpreter)` sẽ đọc và thực thi từng dòng mã nguồn tại thời điểm chạy. Ví dụ: `JavaScript`, `Python`, `Ruby`, `PHP`, ...

---
## Có thể sử dụng JavaScript để làm gì?
1. Phát triển giao diện người dùng `(Front-end)`.
> Một số `framework font-end` phổ biến sử dụng `javascript`: `React`, `Angular`, `Vue`,...
2.  Xây dựng ứng dụng web phía máy chủ `(Back-end)`.
> Một số `framework back-end` phổ biến sử dụng `javascript`: `Express.js`, `NestJS`, ...
3. Phát triển ứng dụng di động.
> Sử dụng các `framework` như `React Native`, `Ionic`, `NativeScript` để viết app `Android` & `iOS` bằng `JavaScript`.
4. Phát triển ứng dụng máy tính `(Desktop App)`.
> Với `Electron.js`, bạn có thể tạo ứng dụng chạy trên `Windows`, `macOS` và `Linux`. Một số app: `Visual Studio Code`, `Discord`, ...
5. Làm game.
> `JavaScript` kết hợp với `Canvas API` hoặc thư viện như `Phaser`, `Three.js` để tạo các `game 2D` và `3D` chạy trên trình duyệt.
6. Tạo biểu đồ và hiển thị dữ liệu.
7. Lập trình AI cơ bản, xử lý ảnh, video.
8. Tự động hóa và kiểm thử (Automation & Testing)

---
## Cách cài đặt và sử dụng
- `JavaScript` không cần cài đặt riêng biệt để chạy trong trình duyệt – vì tất cả các trình duyệt hiện đại (`Chrome`, `Firefox`, `Edge`, `Safari`, v.v.) đều tích hợp sẵn trình thông dịch `JavaScript`.

- Tuy nhiên, để lập trình JavaScript một cách chuyên nghiệp, bạn nên chuẩn bị các công cụ sau:
+ `Text Editor` (Trình soạn thảo mã nguồn): `Visual Studio Code`, `Sublime Text`, `Notepad ++`, ...
> Cài đặt: [Visual Studio Code](https://code.visualstudio.com/Download)
> Tại Visual Studio Code cài đặt extension: Live Server, Prettier - Code formatter,...
+ Tạo file `index.html` với nội dung:
`index.html`
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Nâng cao</title>
</head>
<body>
  <h1>Xin chào JavaScript</h1>
  <script>
    alert("Chào bạn! Đây là JavaScript.");
  </script>
</body>
</html>
```
Hoặc tạo 2 file `index.html` và `main.js`
`index.html`
```html
<html>
<head>
  <title>JavaScript Nâng cao</title>
</head>
<body>
  <h1>Xin chào JavaScript</h1>

  <script src="main.js"></script>
</body>
</html>
```
và `main.js`
```js
  alert("Chào bạn! Đây là JavaScript.");
```

## Tài liệu tự học:
- [Udemy](https://fpl.udemy.com/learning-paths/10392595/)
- [w3schools](https://www.w3schools.com/js/default.asp)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)