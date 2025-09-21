// toán tử
// toán tử logic

let mark = 7;

if(mark >= 0 && mark < 5){
  console.log("Yếu");
}else if(mark >= 5 && mark < 7){
  console.log("Trung bình");
}
else if(mark >= 7 && mark < 9){
  console.log("Khá");
}else{
  console.log("Giỏi");
}

if(mark < 5){
  console.log("Yếu");
}else if(mark < 7){
  console.log("Trung bình");
}else if(mark < 9){
  console.log("Khá");
}else{
  console.log("Giỏi");
}

var gender = false;

const result = gender == true ? "Nam" : "Nữ";

console.log(result);
