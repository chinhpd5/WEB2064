const getData = async () =>{
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
  const data = await getData();
  renderData(data);
  renderCategory(data);
}

const renderData = (list) => {
  const listElement = list.map((item) => {
    return `
      <div class="col-3">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price.toLocaleString('vi-VN')} VNĐ</p>
            <div class="d-flex justify-content-around">
              <a href="#" class="btn btn-primary px-3">Mua ngay</a>
              <a href="product-detail.html?id=${item.id}" class="btn btn-outline-success px-3">Chi tiết</a>
            </div>
          </div>
        </div>
      </div>
    `
  }).join('');

  // console.log(listElement);
  const listProduct = document.getElementById('product-list');
  listProduct.innerHTML = listElement;
}

const handleSearch = async (e) =>{
  e.preventDefault(); // ngăn chặn hành vi tải trang mặc định khi submit form
  const inputValue = document.getElementById('input-search').value;
  // console.log(inputValue);

  const data = await getData();
  const filter = data.filter((item)=>{
    return item.name.toLowerCase().includes(inputValue.toLowerCase())
  })
  // console.log(filter);
  if(!filter.length){
    alert("Không tìm thấy sản phẩm nào");
    renderData(data);
    return;
  }
  renderData(filter)
}

const renderCategory = (list) => {
  // lấy tất cả danh mục từ danh sách sản phẩm
  const array = list.map((item)=>{
    return item.category
  })

  // lọc những danh mục không trùng nhau
  const listCategory = array.reduce((acc, current)=>{
    if(!acc.includes(current)){
      acc.push(current)
    }
    return acc;
  },[])

  // console.log(listCategory);
  let options = listCategory.map((item) => {
    return `<option value="${item}">${item}</option>`
  }).join('')
  
  options = `<option value="-1" selected>Tất cả</option>` + options;

  const select = document.getElementById('select-catefory');
  select.innerHTML = options
}

const handleChangeSelect = async () => {
  const selectValue = document.getElementById('select-catefory').value;
  // console.log(selectValue);

  const data = await getData();
  if(selectValue != -1){
    const filters = data.filter((item)=>{
      return item.category == selectValue
    })
    renderData(filters)
  }else{
    renderData(data)
  }
}

init();