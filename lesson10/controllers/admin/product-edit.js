import {getProductById,updateProduct} from '../../services/product.js'

const param = new URLSearchParams(window.location.search);
let id = param.get('id');

const inputName = document.getElementById('name');
const inputImage = document.getElementById('image');
const inputPrice = document.getElementById('price');
const inputStock = document.getElementById('stock');
let inputCategory = document.getElementById('category');
let inputStatus = document.querySelector('input[name="status"]:checked');



const init = async () => {
  const product = await getProductById(id);
  // console.log(product);

  // gán vào input
  inputName.value = product.name
  inputImage.value = product.image;
  inputPrice.value = product.price;
  inputStock.value = product.stock;
  inputCategory.value = product.category;
  product.status ? document.getElementById('inStock').setAttribute('checked',true) : document.getElementById('outStock').setAttribute('checked',true)


  form.addEventListener('submit', (e) => {
      e.preventDefault();

      inputCategory = document.getElementById('category');
      inputStatus = document.querySelector('input[name="status"]:checked');
  
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
      // console.log(inputStatus.value);
      
      const data = {
        name: inputName.value,
        iamge: inputImage.value,
        price: Number(inputPrice.value),
        stock: Number(inputStock.value),
        category: inputCategory.value,
        status: inputStatus.value == '1' ? true: false
      }
  
      // console.log(data);
      updateProduct(id, data)
    })
}

init();