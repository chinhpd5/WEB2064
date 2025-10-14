import { addProduct } from '../../services/product.js'
const init = () => {
  const form = document.getElementById('form');
  // khai báo sự kiện submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // lấy tất cả ô input
    const inputName = document.getElementById('name');
    const inputImage = document.getElementById('image');
    const inputPrice = document.getElementById('price');
    const inputStock = document.getElementById('stock');
    const inputCategory = document.getElementById('category');
    const inputStatus = document.querySelector('input[name="status"]:checked');
    // console.log(inputStatus);

    // validate
    if(!inputName.value.trim()){
      alert("Cần nhập thông tin tên sản phẩm");
      inputName.focus();
      return;
    }

    if(!inputImage.value.trim()){
      alert("Cần nhập thông tin ảnh sản phẩm");
      inputImage.focus();
      return;
    }

    if(!inputPrice.value.trim()){
      alert("Cần nhập thông tin giá bán sản phẩm");
      inputPrice.focus();
      return;
    }

    if(!inputStock.value.trim()){
      alert("Cần nhập thông tin số lượng sản phẩm");
      inputStock.focus();
      return;
    }

    if(inputCategory.value == "-1"){
      alert("Cần nhập thông tin Danh mục sản phẩm");
      inputCategory.focus();
      return;
    }

    if(!inputStatus){
      alert("Cần lựa chọn trạng thái sản phẩm");
      document.getElementById('inStock').focus()
    }
    
    // lấy dữ liệu
    console.log(inputStatus.value);
    
    const data = {
      name: inputName.value,
      iamge: inputImage.value,
      price: Number(inputPrice.value),
      stock: Number(inputStock.value),
      category: inputCategory.value,
      status: inputStatus.value == '1' ? true: false
    }

    // console.log(data);
    addProduct(data)
  })
}

init();