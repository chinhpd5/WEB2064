// cách 1
export const myName = 'chinhpd5';
export const myFunction = () => {
  console.log('Hàm từ script.js');
}

// cách 2
const myGender = true;
const myHome = 'Hà Nội';

const myKey = 123456;

export {
  myGender,
  myHome
}

// chỉ có duy nhất 1 export default
export default myKey;