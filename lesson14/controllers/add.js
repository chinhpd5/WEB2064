const handleSubmit = () =>{
  const form = document.getElementById('form');
  // console.log(form);
  form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // lấy input
    const inputName = document.getElementById('name');
    const inputAge = document.getElementById('age');
    const inputEmail = document.getElementById('email');
    const inputMajor = document.getElementById('major');

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
    handleAdd(data)
  })
  
}

handleSubmit();

const handleAdd = async (data) =>{
  try {
    const res = await fetch(`http://localhost:3000/students`,{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(res.ok){
      window.location = 'index.html' // để trước alert
      alert("Thêm thành công");
    }
  } catch (error) {
    console.log(error);
    
  }
}