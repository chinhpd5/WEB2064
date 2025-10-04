// cách 1
const sayHello = (name) =>{
  console.log(`Xin chào ${name}`);
}

const greeting = (callback) =>{
  callback('chinhpd5');
}

// greeting(sayHello)

// cách 2
const greeting1 = (()=>{
  console.log("Ở đây cũng xin chào");
})

// greeting1()

const delayCallback = (ms,cb) =>{
  setTimeout(()=>{
    cb(`Chờ... ${ms/1000}s`)
  },ms)
}

const doingCallback = ()=>{
  delayCallback(2000,(res)=>{
    console.log(res);
  })
  
}

// doingCallback()
// callback hell

// promise
const myPromise = new Promise((resolve, reject)=>{
  const isCheck = true;
  if(isCheck){
    resolve("Thành công")
  }else{
    reject("Thất bại")
  }
})

// myPromise
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log('Hoàn thành');
//   })

const delayPromise =(ms) =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const isCheck = true;
      if(isCheck){
        resolve(`Chờ... ${ms/1000}s`)
      }else{
        reject("Thất bại")
      }
    },ms)
  })
}

const doingPromise = () => {
  
  delayPromise(2000)
    .then((data)=>{
      console.log(data); 
      return delayPromise(1500); // thực thi trong .then tiếp theo
    })
    .then(data => {
      console.log(data);
      return delayPromise(1000); // nếu xảy ra lỗi sẽ vào .catch
    })
    .then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
}

// doingPromise();

// async - await

const doingAsync = async () => {
  try {
    console.log(1);
    console.log(await delayPromise(2000));
    console.log(3);
    console.log(await delayPromise(1500));
    console.log(await delayPromise(1000));
  } catch (error) {
    console.log(error);
  }

}

// doingAsync()
// async function test(){}

const getData = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // console.log(response);
    const data = await response.json();
    console.log(data);
    renderTable(data)
  } catch (error) {
    alert(error)
  }

  // fetch(`https://jsonplaceholder.typicode.com/users`)
  //   .then(res =>{
  //     // console.log(res);
  //     return res.json();
  //   })
  //   .then(data=>{
  //     console.log(data);
  //     renderTable(data)
  //   })
  //   .catch(err=>{
  //     alert(err)
  //   })
}

getData();

const renderTable = (list)=>{
  const liList = list.map((item,index)=>{
    return `<li>${index+1} | ${item.name} | ${item.phone}</li>`
  }).join('')

  // console.log(liList);
  const ulElement = document.querySelector('ul');
  ulElement.innerHTML = liList
}