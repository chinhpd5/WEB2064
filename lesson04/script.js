const listStudents = document.querySelectorAll('#student-list li');
console.log(listStudents);

listStudents.forEach((item)=>{
  // console.log(item);
  console.log(item.textContent);
})

const addStudent = () => {
  const input = document.getElementById('student-name');
  // console.log(input.value);

  if(input.value){
    // tạo và thêm nội dung cho thẻ li
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    // console.log(liElement);

    // thêm thẻ li vào trong ul
    const ulElement = document.getElementById('student-list');
    ulElement.appendChild(liElement);

    // xóa nội dung trong input
    input.value = null;
  }
  
}


const removeLastStudent = () => {
  // lấy phần tử cha
  const ulElement = document.getElementById('student-list');
  // lấy danh sách các phần tử con
  const listStudents = document.querySelectorAll('#student-list li');
  // xóa phần cuối cùng thông length-1
  ulElement.removeChild(listStudents[listStudents.length-1])
}
