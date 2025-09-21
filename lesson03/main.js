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

console.log(tinhTinh(3));

