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
      return delayPromise(1500)
    })
    .then(data => {
      console.log(data);
      return delayPromise(1000)
    })
    .then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
}

doingPromise();