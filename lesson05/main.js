const imgElement = document.querySelector('img');

// console.log(imgElement);

// truy xuất
console.log(imgElement.src);
console.log(imgElement.alt);
console.log(imgElement.getAttribute('width'));

// gán
imgElement.src= 'https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp'
imgElement.setAttribute('width', 100);
imgElement.setAttribute('my-attribute', 'chinhpd5');
imgElement.className = 'myClass';

// xóa
imgElement.removeAttribute('class')


