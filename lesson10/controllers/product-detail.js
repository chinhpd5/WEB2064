const param = new URLSearchParams(window.location.search);
let id = param.get('id');
// console.log(id);

const getData = async () =>{
  if(id){
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

const init = async () => {
  const data = await getData()
  renderData(data);
}

const renderData = (data) => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="row">
      <!-- Ảnh sản phẩm -->
      <div class="col-md-5">
        <div class="card shadow-sm">
          <img src="${data.image}" class="card-img-top" alt="${data.name}">
        </div>
      </div>

      <!-- Thông tin sản phẩm -->
      <div class="col-md-7">
        <h2 class="fw-bold mb-3">${data.name}</h2>
        <p class="text-muted">Mã sản phẩm: SP12345</p>

        <h4 class="text-danger mb-4">${data.price.toLocaleString('vi-VN')} VNĐ</h4>

        <p class="mb-4">
          Tồn kho: ${data.stock}
        </p>

        <!-- Số lượng -->
        <div class="d-flex align-items-center mb-4">
          <label for="quantity" class="me-2">Số lượng:</label>
          <input type="number" id="quantity" class="form-control w-auto" min="1" value="1">
        </div>

        <!-- Nút thao tác -->
        <div class="d-flex gap-3">
          <button class="btn btn-primary btn-lg">🛒 Thêm vào giỏ</button>
          <button class="btn btn-outline-secondary btn-lg">❤ Yêu thích</button>
        </div>
      </div>
    </div>

    <!-- Mô tả chi tiết -->
    <div class="row mt-5">
      <div class="col-12">
        <h4 class="border-bottom pb-2 mb-3">Mô tả chi tiết</h4>
        <p>Danh mục: ${data.category}</p>
        <p>
          Sản phẩm này mang phong cách hiện đại, phù hợp với xu hướng thời trang mới nhất.
          Được gia công tỉ mỉ, đảm bảo chất lượng cao và bền bỉ theo thời gian.
        </p>
      </div>
    </div>
  `
}

init();