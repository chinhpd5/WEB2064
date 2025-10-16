
const getStudent = async () => {
  try {
    const res = await fetch(`http://localhost:3000/students`);
    const data = await res.json();
    console.log(data);
    renderStudent(data)
  } catch (error) {
    console.log(error);
  }
}

getStudent();

const renderStudent = (list) => {
   const trLists = list.map((item,index) => {
    return `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        <td>${item.major}</td>
        <td>
          <button onclick="handleDelete('${item.id}')" class="btn btn-danger">Xóa</button>
          <a class="btn btn-warning" href="edit.html?id=${item.id}">Sửa</a>
        </td>
      </tr>
    `
   }).join('');

  //  console.log(trLists);
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = trLists
   
}

const handleDelete = async (id) =>{
  // console.log(id);
  if(window.confirm("Bạn có chắc chắn muốn xóa không")){
    try {
      const res = await fetch(`http://localhost:3000/students/${id}`, {
        method: 'delete'
      });
      if(res.ok){
        alert("Xóa thành công")
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}