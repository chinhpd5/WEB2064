const param = new URLSearchParams(window.location.search)
const id = param.get('id');

const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputEmail = document.getElementById('email');
const inputMajor = document.getElementById('major');
// console.log(id);


const getStudentById = async () =>{
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`);
    const data = await res.json();

    // console.log(data);
    inputName.value = data.name;
    inputAge.value = data.age;
    inputEmail.value = data.email;
    inputMajor.value = data.major;
    
  } catch (error) {
    console.log(error);
  }
}

getStudentById();

const handleSubmit = () =>{
  const form = document.getElementById('form');
  // console.log(form);
  form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // validate
    if(!inputName.value.trim()){
      alert("Cần nhập thông tin họ và tên");
      inputName.focus();
      return;
    }

    if(!inputAge.value.trim()){
      alert("Cần nhập thông tin tuổi");
      inputAge.focus();
      return;
    }

    if(!inputEmail.value.trim()){
      alert("Cần nhập thông tin email");
      inputEmail.focus();
      return;
    }

    // lấy data

    const data = {
      name: inputName.value,
      age: Number(inputAge.value),
      email: inputEmail.value,
      major : inputMajor.value
    }

    console.log(data);
    // thêm mới
    handleUpdate(data)
  })
  
}

handleSubmit();

const handleUpdate = async (data) =>{
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`,{
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(res.ok){
      window.location = 'index.html' // để trước alert
      alert("Cập nhật thành công");
    }
  } catch (error) {
    console.log(error);
    
  }
}