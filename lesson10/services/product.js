export const getAllProducts = async () => {
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
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
} 