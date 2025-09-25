const img = document.getElementById('avatar')  

const changeAvatar = () => {
  // img.setAttribute('src','https://cdn-media.sforum.vn/storage/app/media/anh-dep-68.jpg')
  img.src = 'https://cdn-media.sforum.vn/storage/app/media/anh-dep-68.jpg'
}

const toggleBorder = () =>{
  if(img.getAttribute('style') == 'border: 3px solid yellow'){
    img.removeAttribute('style')
  }else{
    img.setAttribute('style', 'border: 3px solid yellow')
  }
}

const changeLink = () => {
  const aElment = document.getElementById('profile-link')
  aElment.href = 'https://google.com';
  aElment.textContent = 'Đi tới Google'
}

const removeAlt = () => {
  if(window.confirm("Bạn có chắc chắn muốn xóa không ?")){
    img.removeAttribute('alt')
  }
}

const changeText = () => {
  const h2Element = document.getElementById('greeting');
  h2Element.textContent = 'Chào mừng các bạn'
}

const addText = () => {
  document.body.innerHTML += '<h1>Chúc mừng các bạn<h1>'
}