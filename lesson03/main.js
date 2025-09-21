// Hàm
// Declration function

function sayHello() {
  // logic code
  console.log("Xin chào các bạn");
}

// sayHello();
// parameter
function sayHello1(name) {
  // console.log('Chào mừng bạn '+ name + '.');
  console.log(`Chào mừng bạn ${name}.`);// template string
}

// sayHello1('chinhpd5')

function tinhTong(a,b){
  console.log("Bắt đầu");
  return a + b;
  console.log("Kết thúc");
}

// var result = tinhTong(1,2);
// console.log(result);

// default parameter
function tinhTich(a = 1,b = 2) {
  console.log(a);
  console.log(b);
  
  return a*b;
}

// console.log(tinhTich());

// Expression function
var sayHello1 = function() {
  console.log(`Tạm biệt`);
}

// sayHello1();

// Arrow function
var sayHello2 = (name,age) => {
  return `Xin chào bạn: ${name}, Tuổi: ${age}`
}

// console.log(sayHello2('chinhpd5',20));

var sayHello3 = (a) => {
  // Không có thêm logic code
  return a+2;
}

// cú pháp rút gọn của arrow function
var sayHello4 = a => a+2;
// console.log(sayHello4(2));

// destructring
// mảng
var [a, , ,d] = [1,2,3,4];
// console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(d);

// object
var { name, age, child: {name : childName, home} } = {
  name: 'chinhpd5',
  age: 20,
  child: {
    name: 'chinhpd6',
    home: 'Hà Nội'
  }
}

console.log(name);
console.log(age);
console.log(childName);
console.log(home);






// rest

// spread
