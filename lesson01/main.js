// console.log("Lập trình JS Nâng cao");

// console.log(myName); // undefined
// console.log(myAge); // Lỗi

var myName = "Chinhpd5";
let myAge = 20;
const myGender = true;

// sayHello(); // hositing

function sayHello() {
  console.log("abc");
}

// global scope
let a = 1; // var và let đều có phạm vi toàn cục

{
  a = 2;
  // console.log(a);
}

// console.log(a);

// block scope
{
  let b = 1; // let chỉ truy cập trong 1 khối (block), var thì có thể
  // console.log(b);
}

// console.log(b);

// function scope
function sayHello1() {
  let c = 1; // cả var và let chỉ có thể truy cập trong function scope
}

// console.log(c);


