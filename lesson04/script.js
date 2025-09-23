// câu 1:

const liItems = document.querySelectorAll('ul#student-list li');
// console.log(liItems);

liItems.forEach((item) => {
  // console.log(item);
  console.log(item.textContent);
})


// câu 2:
const addStudent = () => {
  //b1: lấy giá trong ô input
  const input = document.getElementById('student-name');
  // console.log(input.value);

  // b2: Tạo thẻ li và thêm vào ul
  if(input.value){
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    // console.log(liElement);

    const ulElement = document.getElementById('student-list');
    ulElement.appendChild(liElement);

    // reset giá trị ô input
    input.value = null;
  }
  
}

// câu 3:

const removeLastStudent = () => {
  // lấy phần tử cha ul
  const ulElement = document.getElementById('student-list');

  // lấy mảng con li
  const liItems = document.querySelectorAll('ul#student-list li');

  if(liItems.length){
    // xóa: liItems.length - 1
    ulElement.removeChild(liItems[liItems.length-1])
  }

}