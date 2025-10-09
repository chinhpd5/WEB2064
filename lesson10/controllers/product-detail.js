const param = new URLSearchParams(window.location.search);
let id = param.get('id');
// console.log(id);

const getProductById = async (id) => {
  
  if(id){
    console.log(123);
    
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      console.log(data);
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }else{
    alert("không tìm thấy sản phẩm")
  }
}

const init = async () => {
  const product = await getProductById(id);
  // console.log(product);
  console.log(document.getElementById('content'));
  
  document.getElementById('content').innerHTML = `
    <div class="row g-4">
      <!-- Hình ảnh sản phẩm -->
      <div class="col-md-6 text-center">
        <img src="${product.image}" alt="Sản phẩm" class="img-fluid product-img shadow">
      </div>

      <!-- Thông tin sản phẩm -->
      <div class="col-md-6">
        <h2 class="fw-bold">${product.name}</h2>

        <div class="rating mb-2">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-half"></i>
          <span class="text-muted">(4.5/5 - 120 đánh giá)</span>
        </div>

        <h4 class="price">${product.price.toLocaleString('vi-VN')}₫</h4>

        <p class="text-secondary">
         Danh mục: ${product.category}
        </p>
        <p> Tồn kho: ${product.stock}</p>

        <div class="mb-3">
          <label for="size" class="form-label">Chọn kích cỡ:</label>
          <select id="size" class="form-select w-50">
            <option>Chọn kích cỡ</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div class="d-flex align-items-center mb-3">
          <label for="quantity" class="me-2">Số lượng:</label>
          <input type="number" id="quantity" value="1" min="1" class="form-control w-25">
        </div>

        <button class="btn btn-danger btn-lg me-2">
          <i class="bi bi-cart-plus"></i> Thêm vào giỏ hàng
        </button>
        <button class="btn btn-outline-secondary btn-lg">
          <i class="bi bi-heart"></i> Yêu thích
        </button>
      </div>
    </div>

    <!-- Mô tả chi tiết -->
    <div class="mt-5">
      <h4 class="mb-3">Mô tả chi tiết</h4>
      <p>
        Áo được thiết kế trẻ trung, dễ phối đồ cùng quần jean hoặc quần short. Sản phẩm được sản xuất theo công nghệ hiện đại, đảm bảo độ bền màu và form dáng chuẩn sau nhiều lần giặt.
      </p>
      <ul>
        <li>Chất liệu: 100% Cotton</li>
        <li>Thương hiệu: Coolmate</li>
        <li>Xuất xứ: Việt Nam</li>
      </ul>
    </div>
  `
}

init();
