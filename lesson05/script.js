const img = document.getElementById('avatar');
// console.log(img);

// câu 1:
const changeAvatar = () => {
  img.src = 'https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp';
  // img.setAttribute('src','')
}

// câu 2:
const toggleBorder = () =>{
  if(img.getAttribute('style') == 'border: 3px solid red'){
    img.removeAttribute('style')
  }else{
    img.setAttribute('style', 'border: 3px solid red')
  }
}
const aElement = document.getElementById('profile-link')
// câu 3:
const changeLink = () => {
  aElement.href = 'https://google.com'
  aElement.textContent = 'Đi đến Google'
}

// câu 4:

const removeAlt = () => {
  if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
    img.removeAttribute('alt')
  }
}