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

// Biến tham trị: kiểu dữ liệu nguyên thủy: string, number, boolean,...
var x = 1; // 1
var y = x; // 1 -> gán giá trị của x cho y
x = 2; // 2

// console.log(x); // 2
// console.log(y); // 1

// Biến tham chiếu: kiểu dữ liệu phức tạp: object, array,...
var x = {value : 1};
var y = x; // gán vị trí nhớ của x cho y
x.value = 2;

// console.log(x.value); // 2
// console.log(y.value); // 2

// Biến nguyên thủy

// string: chuỗi
var myName = 'chinhpd5';
var myName = "chinhpd5";
var myName = `chinhpd5`; // template string

console.log(`Xin chào ${myName}`);
console.log(typeof myName);

// number: số
var myAge = 20;
var myMark = 9.5;

console.log(myMark);
console.log(typeof myMark);
var test = 'a'/1;
console.log(typeof test);
console.log(-1/0);

// boolean : true/false
var myGender = true
console.log(typeof myGender);

// null
var testNull = 'abc';
testNull = null;
console.log(typeof null); //object

// undefined
var myUndefined;
console.log(myUndefined);
console.log(typeof myUndefined);










