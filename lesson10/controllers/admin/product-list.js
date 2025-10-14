import {getAllProducts, removeProduct} from '../../services/product.js';

const init = async () => {
  const data = await getAllProducts();
  // console.log(data);
  renderProduct(data)
}

const renderProduct = (list) => {
  const trLists = list.map((item,index) => {
    return `
       <tr>
          <th scope="row">${index+1}</th>
          <td>${item.name}</td>
          <td>
            <img height="70" src="${item.image}" alt="">
          </td>
          <td>${item.price}</td>
          <td>${item.stock}</td>
          <td>${item.category}</td>
          <td>${item.status? 'Còn hàng': 'Hết hàng'}</td>
          <td>
            <button onclick="handleDelete(${item.id})" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
    `
  }).join('');

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = trLists
}

const handleDelete = (id) => {
  // console.log(id);
  removeProduct(id);
}

init();

window.handleDelete = handleDelete;