import {addProduct} from '../../services/product.js'

const init = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    // lấy ra danh sách các ô input
    const inputName = document.getElementById('name');
    const inputImage = document.getElementById('image');
    const inputPrice = document.getElementById('price');
    const inputStock = document.getElementById('stock');
    const inputCategory = document.getElementById('category');
    const inputStatus = document.querySelector('input[name="status"]:checked');

    // validate
    if(!inputName.value.trim()){
      alert("Cần nhập tên sản phẩm");
      inputName.focus();
      return;
    }

    if(!inputImage.value.trim()){
      alert("Cần nhập hình ảnh");
      inputImage.focus();
      return;
    }

    if(!inputPrice.value.trim()){
      alert("Cần nhập giá bán");
      inputPrice.focus();
      return;
    }

     if(!inputStock.value.trim()){
      alert("Cần nhập số lượng");
      inputStock.focus();
      return;
    }

    if(inputCategory.value == "-1"){
      alert("Cần chọn Danh mục");
      inputCategory.focus();
      return;
    }

    if(!inputStatus){
      alert("Cần lựa chọn Trạng thái");
      document.getElementById('inStock').focus();
      return;
    }

    // lấy data
    const data = {
      name: inputName.value,
      price: Number(inputPrice.value),
      image: inputImage.value,
      stock: Number(inputStock.value),
      category: inputCategory.value,
      status: inputStatus.value == '1' ? true : false
    }

    // console.log(data);

    // thêm vào db
    addProduct(data)
    
  })
}

init();