// Element: thẻ

// lấy ra
// id, class, tag

const h1Element = document.getElementById('title'); // trả về 1 đối tượng element
// console.log({h1Element});

const pElements = document.getElementsByClassName('paragraph'); // trả về HTMLCollection: Mảng
// console.log(pElements);

const pTagElemnts = document.getElementsByTagName('p');// trả về HTMLCollection: Mảng chứa các element
// console.log(pTagElemnts);

// css selector

// trả về 1 đối tượng
// console.log(document.querySelector('#title')); // id
// console.log(document.querySelector('.paragraph')); //class
// console.log(document.querySelector('.parent .paragraph')); // class
// console.log(document.querySelector('h1#title1')); // tag

// trả về NodeList: Mảng chứa các phần tử
// console.log(document.querySelectorAll('.paragraph'));

// thêm
// tạo thẻ
const h2Child = document.createElement('h2');
// thêm nội dung
h2Child.textContent = 'Đây là thẻ h2'
// console.log(h2Child);
// add vào 1 phần tử nào đó
document.body.appendChild(h2Child)

// Xóa
const parent = document.querySelector('.parent');
// console.log(parent);

const h1Child = document.querySelector('.parent .paragraph');
// console.log(h1Child);

parent.removeChild(h1Child);



