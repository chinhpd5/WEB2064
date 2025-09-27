const arr = [5, -2, 3, 10, 1, 20];

// console.log(arr.sort((a,b) => a-b));
// console.log(arr.sort((a,b) => b-a));

let students = [
  { name: "Hà", age: 20, gender: false, mark: 8.5 },
  { name: "Long", age: 21, gender: true, mark: 6.8 },
  { name: "Trang", age: 19, gender: false, mark: 9.2 },
  { name: "Minh", age: 22, gender: true, mark: 7.4 },
  { name: "Hương", age: 19, gender: false, mark: 3.9 }
];
console.log(students);


// forEach
// students.forEach((item,index,array) => {
//   // console.log(item); // giá trị
//   // console.log(index); // vị trí
//   // console.log(array); // mảng cũ
//   if(item.mark >= 8 ){
//     console.log(item.name + ", Học lực Giỏi");
//   }else if(item.mark >=5){
//     console.log(item.name + ", Học lực Khá");
//   }else{
//     console.log(item.name + ", Học lực Yếu");
//   }
// })

// find
const findItem = students.find((item, index) => {
  // return item.name == "Trang"
  // console.log(index);
  // return item.age < 20
  // return !item.gender
  // return item.age <= 19
  return item.mark == 6.8
});

// console.log(findItem);

// every
const everyCheck = students.every((item, index) => {
  // console.log(index);
  return item.age >= 20
})
// console.log(everyCheck);

// some
const someCheck = students.some((item, index) => {
  // console.log(index);
  return item.mark < 3
})

// console.log(someCheck);

// map

const mapResult = students.map((item, index) => {
  // return item.name
  return {
    ...item, // spread
    gender: item.gender ? 'Nam' : 'Nữ'
  }
})

// console.log(mapResult);

const result1 = students.map((item, index) => {
  return `${item.name} có điểm ${item.mark}, 
    học lực: ${item.mark >= 8 ? 'Giỏi' : item.mark >= 6 ? 'Khá' : 'Yếu'} `
})

// console.log(result1);

const trElement = students.map((item, index) => {
  return `
    <tr>
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.gender ? 'Nam' : 'Nữ'}</td>
      <td>${item.mark}</td>
      <td>${item.mark >= 8 ? 'Giỏi' : item.mark >= 6 ? 'Khá' : 'Yếu'}</td>
      <td><button onclick="handleDelete(${index})">Xóa</button></td>
    </tr>
  `
}).join(''); // join chuyển 1 mảng về thành chuỗi

// console.log(trElement);
const tbodyElement = document.querySelector('tbody');
tbodyElement.innerHTML = trElement;


// filter

const filterResult = students.filter((item, index) => {
  return !item.gender
})

console.log(filterResult);

const handleDelete = (index) => {

  if(!window.confirm("Bạn có chắc chắn muốn xóa không?")){
    return;
  }

  // console.log(index);
  students = students.filter((item, i) => {
    return i != index
  })

  // console.log(students);

  const trElement = students.map((item, index) => {
    return `
    <tr>
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.gender ? 'Nam' : 'Nữ'}</td>
      <td>${item.mark}</td>
      <td>${item.mark >= 8 ? 'Giỏi' : item.mark >= 6 ? 'Khá' : 'Yếu'}</td>
      <td><button onclick="handleDelete(${index})">Xóa</button></td>
    </tr>
  `
  }).join(''); // join chuyển 1 mảng về thành chuỗi

  // console.log(trElement);
  const tbodyElement = document.querySelector('tbody');
  tbodyElement.innerHTML = trElement;

}






