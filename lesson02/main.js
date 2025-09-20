// Toán tử

var a = 1;
var b = "1";

// console.log(a == b);
// console.log(a === b);


// console.log(1 && null && 'a');
// console.log(null || undefined || 1 || false);

// var a = 1;
// var b = !a;

// console.log(b);

var mark = 6;
if(mark >= 0 && mark < 5) {
  console.log("Yếu");
}else if(mark >= 5 && mark < 7) {
  console.log("Trung bình");
}else if(mark >= 7 && mark < 9) {
  console.log("Khá");
}else{
  console.log("Giỏi");
}

mark = 6
// cách 2
if(mark >= 9) {
  console.log("Giỏi");
}else if(mark >= 7){
  console.log("Khá");
}else if(mark >= 5){
  console.log("Trung bình");
}else{
  console.log("Yếu");
}

var gender = false;
var result = gender == true ? "Nam" : "Nữ";

console.log(result);




