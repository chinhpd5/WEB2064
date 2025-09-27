const arr = [2, 30, 3, 21, -1, 15];

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
const findItem = students.find((item, index) => {
  // return item.age == 19;
  // console.log(index);
  // return item.mark == 10;
  // return !item.gender
  // return item.age <= 19
  return item.name == 'Minh'
})

// console.log(findItem);

// every

const every = students.every((item, index) => {
  // console.log(index);
  // return item.age > 19
  return item.gender
})

// console.log(every);

// some 
const some = students.some((item, index) => {
  // console.log(index);
  // return item.gender
  return item.mark <= 1
})

// console.log(some);

// map

const map = students.map((item, index) => {
  return {
    // name: item.name,
    // age: item.age
    ...item, //spread
    gender: item.gender ? 'Nam' : 'Nữ'
  };
})

// console.log(map);

const resultMap = students.map((item, index) => {
  let hocLuc = ''
  if (item.mark >= 8) {
    hocLuc = 'Giỏi'
  } else if (item.mark >= 6.5) {
    hocLuc = 'Khá'
  } else {
    hocLuc = 'Yếu'
  }
  return `${item.name} có điểm ${item.mark}, học lực: ${hocLuc}`
})

// console.log(resultMap);

const trElements = students.map((item,index) => {
  return `
    <tr>
      <td>${index+1}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.gender ? 'Nam': 'Nữ'}</td>
      <td>${item.mark}</td>
      <td>${item.mark >= 8 ? 'Giỏi': item.mark >= 6.5 ? "Khá": "Trung bình"}</td>
    </tr>
  `
}).join('') // join chuyển 1 mảng -> chuỗi

// console.log(trElements);

const tbodyElement = document.querySelector('tbody');
tbodyElement.innerHTML = trElements





