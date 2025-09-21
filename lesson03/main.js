// Hàm
// Declration function

function sayHello() {
  // logic code
  console.log("Xin chào các bạn");
}

// sayHello();
// parameter
function sayHello1(name) {
  console.log(`Chào mừng bạn ${name}`);
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

console.log(tinhTich());
