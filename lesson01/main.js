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

// kiểu tham trị: Tham chiếu về giá trị
var x = 1;
var y = x;
x = 2;

// console.log(x); // 2
// console.log(y); // 1

// Kiểu tham chiếu: tham chiếu về vị trí nhớ
var x = {
  value : 1
}
var y = x;
x.value = 2;

// console.log(x.value); // 2
// console.log(y.value); // 2


// string: chuỗi

var name = 'chinhpd5';
name = "chinhpd6";
name = `chinhpd7`; //template string

// console.log(`Xin chào ${name}`);

// number: số
var age = 20;
var mark = 9.5;
var test = 'a' / 1;
// console.log(test);
// console.log(typeof test);
// console.log(1/0);
// console.log(-1/0);

// boolean: true/false
var gender = true;
// console.log(true);

// null
var love = null;
// console.log(love);


// undefined
var hobby;
// console.log(hobby);


// Biến tham chiếu
// array - mảng

var myArr = [1, 2, 3, 5.4, -2.3];

var myArr2 = [1, 'chinhpd5', true,0];

// console.log(myArr[1]);
// console.log(myArr2.length);

myArr.push(1, 2, 3);
myArr.unshift(-1);

myArr.pop();
myArr.shift();

myArr.splice(2,1,2.5);

console.log(myArr);





