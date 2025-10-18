const getAllStudent = async () => {
  try {
    const res = await fetch(`http://localhost:3000/students`);
    const data = await res.json();
    // console.log(data);
    renderStudent(data)
  } catch (error) {
    console.log(error);
  }
}

const renderStudent = (list) => {
  const trList = list.map((item,index) => {
    return `
      <tr>
        <th scope="row">${index+1}</th>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        <td>${item.major}</td>
        <td>
          <button onclick="handleDelete('${item.id}')" class="btn btn-danger">Xóa</button>
        </td>
      </tr>
    `
  }).join('')

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = trList
}

const handleDelete = async (id) => {
  // console.log(id);
  if(window.confirm("Bạn có chắc chắn muốn xóa không")){
    try {
      const res = await fetch(`http://localhost:3000/students/${id}`,{
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

getAllStudent();