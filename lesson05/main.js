// Attribute

const imgElement = document.querySelector('img');

// console.log(imgElement);

// truy xuất
console.log(imgElement.src);
console.log(imgElement.alt);
console.log(imgElement.className);
console.log(imgElement.getAttribute('width'));

// gán - thêm
imgElement.src = 'https://cdn-media.sforum.vn/storage/app/media/anh-dep-68.jpg'
imgElement.setAttribute('width',500);

// imgElement.abc = 'chinhpd5'
imgElement.setAttribute('abc','chinhpd5')

// xóa
imgElement.removeAttribute('abc')

