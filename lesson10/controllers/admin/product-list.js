import {getAllProduct, removeProduct} from '../../services/product.js'

const init = async () => {
  const data = await getAllProduct();
  console.log(data);
  renderProduct(data);
}

const renderProduct = (list) => {
  const trLists = list.map((item,index) => {
    return `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.stock}</td>
        <td>
          <img height="70" src="${item.image}" alt="">
        </td>
        <td>${item.category}</td>
        <td>${item.status ? 'Còn hàng': 'Hết hàng'}</td>
        <td>  
          <button class="btn btn-danger" onclick="handleDelete(${item.id})">Xóa</button>
        </td>
      </tr>
    `
  }).join('');

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = trLists;
}

const handleDelete = (id) => {
  removeProduct(id);
}

init();

window.handleDelete= handleDelete;