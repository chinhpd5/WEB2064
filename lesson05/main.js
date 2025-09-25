// Attribute

const imgElement = document.querySelector('img');

// console.log(imgElement);

// truy xuất
// console.log(imgElement.src);
// console.log(imgElement.alt);
// console.log(imgElement.className);
// console.log(imgElement.getAttribute('width'));

// gán - thêm
imgElement.src = 'https://cdn-media.sforum.vn/storage/app/media/anh-dep-68.jpg'
imgElement.setAttribute('width',500);

// imgElement.abc = 'chinhpd5'
imgElement.setAttribute('abc','chinhpd5')

// xóa
imgElement.removeAttribute('abc')

// Text
const h1Elment = document.querySelector('h1');

console.log(h1Elment.textContent);
h1Elment.textContent = 'Chào mừng bạn đến với JavaScript'

const divElement = document.getElementById('content');
divElement.innerHTML = '<h2>Đây là thẻ h2</h2>'



