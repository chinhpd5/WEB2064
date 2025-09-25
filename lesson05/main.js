const imgElement = document.querySelector('img');

// console.log(imgElement);

// truy xuất
// console.log(imgElement.src);
// console.log(imgElement.alt);
// console.log(imgElement.getAttribute('width'));

// gán
imgElement.src= 'https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp'
imgElement.setAttribute('width', 100);
imgElement.setAttribute('my-attribute', 'chinhpd5');
imgElement.className = 'myClass';

// xóa
imgElement.removeAttribute('class')

// Text

const h1Element = document.getElementById('title');
// console.log(h1Element);

// truy xuất
console.log(h1Element.textContent);

// Gán 
h1Element.textContent = "Lập trình JavaScript Nâng cao"

const divElement = document.getElementById('content');
// divElement.textContent = '<h2>Đây là thẻ h2</h2>'
divElement.innerHTML = '<h2>Đây là thẻ h2</h2>';



