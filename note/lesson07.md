# Assigment giai đoạn 1
Làm việc với `DOM` và `Mảng`

Cho mảng `products` chứa thông tin các sản phẩm
```js
const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 25000000,
    category: "Laptop",
    stock: 10,
    status: true,
    image: "https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2024/11/06/loq-15arp9-83jc003yvn-1.png"
  },
  {
    id: 2,
    name: "iPhone 17 Pro Max",
    price: 29990000,
    category: "Điện thoại",
    stock: 0,
    status: false,
    image: "https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2025/09/10/iphone-17-pro-max-cosmic-orange-pdp-image-position-1-cosmic-orange-color-vn-vi.jpg"
  },
  {
    id: 3,
    name: "Samsung Galaxy S25 Ultra",
    price: 22990000,
    category: "Điện thoại",
    stock: 8,
    status: true,
    image: "https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png"
  },
  {
    id: 4,
    name: "Tai nghe AirPods Pro 2",
    price: 5500000,
    category: "Phụ kiện",
    stock: 20,
    status: true,
    image: "https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2023/10/27/airpods-pro-2nd-gen-usb-c-1.png"
  },
  {
    id: 5,
    name: "Màn hình LG UltraWide 34 inch",
    price: 14990000,
    category: "Màn hình",
    stock: 0,
    status: false,
    image: "https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2025/02/05/egm27f180pv-1.jpg"
  }
];
```

Cho giao diện sau:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignment</title>
</head>

<body>

  <hr>
  <button id="btn-show">Hiển thị</button>
  <button id="btn-filter">Lọc</button>
  <input type="text" id="search">
  <button id="btn-find">Tìm kiếm</button>
  
  <h1>Danh sách sản phẩm</h1>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên sản phẩm</th>
        <th>Hình ảnh</th>
        <th>Giá bán</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Danh mục</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Laptop Dell XPS 13</td>
        <td><img height="70" src="https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2024/11/06/loq-15arp9-83jc003yvn-1.png" alt=""></td>
        <td>25000000</td>
        <td>10</td>
        <td>Còn hàng</td>
        <td>Laptop</td>
      </tr>
      <tr>
        <td>2</td>
        <td>iPhone 17 Pro Max</td>
        <td><img height="70" src="https://cdn.hoanghamobile.vn/i/previewV2/Uploads/2025/09/10/iphone-17-pro-max-cosmic-orange-pdp-image-position-1-cosmic-orange-color-vn-vi.jpg" alt=""></td>
        <td>29990000</td>
        <td>0</td>
        <td>Hết hàng</td>
        <td>Điện thoại</td>
      </tr>
    </tbody>
  </table>

  <script src="./main.js"></script>
</body>

</html>
```
Thực hiện các yêu cầu sau
- Click nút `Hiển thị` để show danh sách sản phẩm từ mảng `products`
- Click nút `Lọc` để show danh sách sản phẩm trên 20 triệu
- Click nut `Tìm kiếm` để lọc danh sách sản phẩm theo `tên` nhập từ `ô input`
- Thực hiện chức năng thêm mới  
> Thêm giao diện lên phía trước `table` sản phẩm
```html
<h2>Thêm Mới Sản Phẩm</h2>
<form id="product-form">
  <label for="name">Tên sản phẩm:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="price">Giá (VND):</label><br>
  <input type="number" id="price" name="price" required><br><br>

  <label for="category">Danh mục:</label><br>
  <select id="category" name="category">
    <option value="Laptop">Laptop</option>
    <option value="Điện thoại">Điện thoại</option>
    <option value="Phụ kiện">Phụ kiện</option>
    <option value="Màn hình">Màn hình</option>
  </select><br><br>

  <label for="stock">Tồn kho:</label><br>
  <input type="number" id="stock" name="stock" required><br><br>

   <label>Trạng thái:</label><br>
  <input type="radio" id="status-available" name="status" value="Còn hàng">
  <label for="status-available">Còn hàng</label><br>

  <input type="radio" id="status-out" name="status" value="Hết hàng">
  <label for="status-out">Hết hàng</label><br><br>

  <label for="image">Link ảnh:</label><br>
  <input type="url" id="image" name="image" placeholder="https://..."><br><br>

  <button type="submit">Thêm sản phẩm</button>
</form>
```