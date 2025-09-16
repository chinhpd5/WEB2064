// console.log("Lập trình JavaScript Nâng cao");

var myName = "chinhpd5";
var myAge = 20;
var myGender = true;


var myName = "chinhpd6";
// console.log(myName);

let myHome = "Hà Nội";
myHome = "Hà Nam";

const myLove = "Vợ";
// myLove = "Người yêu"

// hositing
// console.log(name1);
var name1 = "chinhpd5";

// console.log(name2);
let name2 = "chinhpd5";

// sayHello()

function sayHello(){
  console.log("Xin chào");
}

// scope: phạm vi

// global scope
let a = 1; // global var là let có thể truy xuất trong hoặc ngoài
{
  a = 2;
  // console.log(a);
}

// console.log(a);

// block scope chỉ áp dụng cho let hoặc const
{
  let b = 1; // với let: chỉ có thể truy xuất 1 biến trong phạm vi của nó
  // console.log(b);
}

// console.log(b); // lỗi

// function (local) scope áp dụng với hàm
function testScope(){
  let x = 1; // var và let chỉ truy xuất trong phạm vi của hàm
  console.log(x);
}

// console.log(x);



