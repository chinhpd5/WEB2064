export const getAllProduct = async () =>{
  try {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getProductById = async (id) => {
  if(id){
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

export const removeProduct = async (id) => {
  try {
    if (window.confirm("Bạn có muốn xóa không?")) {
      const res = await fetch(`http://localhost:3000/products/${id}`,{
      method: 'delete'
    })
    if(res.ok){
      alert("Xóa thành công")
    }
    }
  } catch (error) {
    console.log(error);
  }
}

export const addProduct = async (data) =>{
  try {
    const res = await fetch(`http://localhost:3000/products`,{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })    
    if(res.ok){
      window.location = 'product-list.html'
      alert("Thêm thành công")
    }
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (id, data) =>{
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`,{
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })    
    if(res.ok){
      window.location = 'product-list.html'
      alert("Cập nhật thành công")
    }
  } catch (error) {
    console.log(error);
  }
}