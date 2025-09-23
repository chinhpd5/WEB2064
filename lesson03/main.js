// Hàm
// Decleration function

function sayHello() {
  // logic code
  console.log("Xin chào các bạn");
}

// sayHello();

function sayHello2(name){
  console.log(`Xin chào ${name}`);
}

// sayHello2('chinhpd5');
// sayHello2('Nguyễn Văn A');

function tinhTong(a,b){
  console.log(a+b);
}

// tinhTong(1,2,4)


function tinhTong2(a,b){
  return a+b;
  console.log("123");
}

var result = tinhTong2(2);
// console.log(result);

// default parameter
function tinhTinh(a = 3,b = 3,c = 3) {
  console.log(a);
  console.log(b);
  return a*b;
}

// console.log(tinhTinh(3));

// Expression function
var sayHello3 = function() {
  console.log(`Chào mừng bạn đến với JS Nâng cao`);
}

// sayHello3()

// Arrow function
var sayHello4 = (name,a,b) => {
  console.log(`Tạm biệt ${name}`);
} 

// sayHello4(`chinhpd5`);
var logging1 = (text) => {
  // Không có logic code
  text = `${text} xyz`
  return `Log: ${text}`;
}

// arrow function viết gọn: chỉ có 1 tham số, chỉ có 1 hàm return
var logging = text => `Log: ${text}`;

// console.log(logging("Lỗi abc"));

// destructring
var [a, , , c] = [1,2,3,4];

// console.log(a);
// // console.log(b);
// console.log(c);

var {name, age, child: {name : childName, gender}} = {
  name: "chinhpd5",
  age: 20,
  child : {
    name: "chinhpd6",
    gender: true
  }
}

// console.log(name);
// console.log(age);
// console.log(childName);
// console.log(gender);


// rest ...
const sum = (a, ...rest) => {
  // rest : [2, 3]
  for(let i = 0; i < rest.length; i++){
    a += rest[i];
  }
  return a
}

// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4,5,6));
// console.log(sum(1,2,3,4,5,6,7,8,9));

// rest kết hợp destructring trong array và object
var [a, ...item] = [1,2,3,4]
// console.log(a);
// console.log(item);
var {name, ...restObj} = {
  name: "chinhpd5",
  age: 20,
  child : {
    name: "chinhpd6",
    gender: true
  }
}

// console.log(name);
// console.log(restObj);

// spread ...
var arr1 = [1,2];
var arr2 = [3,4];

// [1,2,3,4];

var newArr = [...arr1, ...arr2];

// console.log(newArr);

var obj1 = {
  name: "chinhpd5",
  age: 20
}

var obj2 = {
  home: 'Hà Nội',
  age: 21
}

var newObj = {...obj1, ...obj2}
// console.log(newObj);

var a = {value : 1}; // deep clone
var b = {...a}; // clone obj
a.value = 2;

console.log(a.value);
console.log(b.value);




