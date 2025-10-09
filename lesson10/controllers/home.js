const getAllProduct = async () => {
  try {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const init = async () => {
  const data = await getAllProduct();
  renderProducts(data)
}

const renderProducts = (list) =>{
  // console.log(list);
  
  const listElement = list.map(item => {
    return `
      <div class="col-3 mt-4">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price} VNĐ</p>
            <div class="d-flex justify-content-around">
              <a href="product-detail.html?id=${item.id}" class="btn btn-primary px-4">Chi tiết</a>
              <button onclick="handleAddCart(${item.id})" class="btn btn-outline-success px-4">Add cart</button>
            </div>
          </div>
        </div>
      </div>
    `
  }).join('');

  // console.log(listElement);
  const productsElement = document.getElementById('product-list');
  productsElement.innerHTML = listElement;
  
}

const handleSearch = async (e) =>{
  e.preventDefault(); // ngăn chặn hành vi mặc định: tải lại trang của form
  // console.log(123);

  // lấy giá trị ô input
  const value = document.getElementById('input-search').value;
  // console.log(value);

  // lấy danh sách tất cả sản phẩm
  const products = await getAllProduct();
  // console.log(products);

  // lọc sản phẩm theo tên
  const filters = products.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  // console.log(filters);
  // nếu không tìm thấy sản phẩm
  if(!filters.length){
    renderProducts(products);
    alert("Không tìm thấy sản phẩm")
    return;
  }
  // nếu có -> hiển thị
  renderProducts(filters)
}

const handleSelect = async () => {
  const value = document.getElementById('filter-select').value
  // console.log(value);
  const products = await getAllProduct();

  const filters = products.filter((item) => {
    return item.category == value
  })
  if(value == -1){
    renderProducts(products)
    return;
  }
  renderProducts(filters)
  
}

const handleAddCart = async (id) => {
  // localStorage.setItem('name','chinhpd5')  
  // console.log(localStorage.getItem('name'));
  const carts = JSON.parse(localStorage.getItem('carts')) || []; // JSON.parse chuyển JSON-> object

  // console.log(id);
  const findItem = carts.find(item => item.idProduct == id);

  if(!findItem){
    const product = await getProductById(id);
    carts.push({
      idProduct : id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    })
  }else{
    // carts[index].quantity++
    findItem.quantity++
  }
  
  // update lại carts trong localStorage
  localStorage.setItem("carts",JSON.stringify(carts));
  alert("Thêm giỏ hàng thành công")
}

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

init();