const arr = [2,30,3,21,-1,15];

// console.log(arr.sort((a,b)=> b-a));

const students = [
  { name: "Hà", age: 20, gender: false, mark: 8.5 },
  { name: "Long", age: 21, gender: true, mark: 6.8 },
  { name: "Trang", age: 19, gender: false, mark: 9.2 },
  { name: "Minh", age: 22, gender: true, mark: 7.4 },
  { name: "Hương", age: 20, gender: false, mark: 3.9 }
];
console.log(students);

// forEach

// students.forEach((item,index,array)=>{
//   // console.log(item); // giá trị của các phần tử trong mảng
//   // console.log(index); // vị trị của các phần tủ
//   // console.log(array); // giá trị của mảng
//   if(item.mark >= 8){
//     console.log(`${item.name}, Học lực: Giỏi`);
//   }else if(item.mark >=6.5){
//     console.log(`${item.name}, Học lực: Khá`);
//   }else{
//     console.log(`${item.name}, Học lực: Trung bình`);
//   }
// })

// find
const findItem = students.find((item,index)=>{
  // return item.age == 19;
  console.log(index);
  return item.mark == 10;
})

console.log(findItem);

