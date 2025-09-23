// Element

// truy vấn
// id, class, tag
const h1Element = document.getElementById('title'); 
// console.log(h1Element); // trả về 1 element đầu tiên tìm thấy

const pElements = document.getElementsByClassName('paragraph');
// console.log(pElements); // trả về 1 HTMLCollection: Mảng chứa các phần tử

const pTagElement = document.getElementsByTagName('p');
// console.log(pTagElement); // trả về 1 HTMLCollection: Mảng chứa các phần tử

// css selector

// trả về 1 element đầu tiên tìm thấy
// console.log(document.querySelector('#title')); // id
// console.log(document.querySelector('.paragraph')); //class
// console.log(document.querySelector('p')); // tag
// console.log(document.querySelector('#parent .paragraph'));


// trả về NodeList: Mảng chứa các phần tử
// console.log(document.querySelectorAll('.paragraph'));

// Thêm mới
const h2Element = document.createElement('h2');
h2Element.textContent = 'Đây là thẻ h2';
// console.log(h2Element);

const parent = document.getElementById('parent');
parent.appendChild(h2Element);

// xóa
// cách 1: xóa phần tử con từ cha
parent.removeChild(h2Element)
// xóa 1 phần tử bất kỳ
h1Element.remove();






