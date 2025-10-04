
const hello = () =>{
  console.log("Xin chào");
}

const greeting = (callback) =>{
  callback()
}

// greeting(hello);

const greeting1 = (()=>{
  console.log("Đây cũng là xin chào");
})

// greeting1()

const fakeDelay = (ms,cb) => { // fake 1 tác vụ bất đồng bộ
  setTimeout(()=>{
    cb(`Chờ ... ${ms/1000}s`);
  },ms)
}

const doingCallback = () =>{
  fakeDelay(2000,(data)=>{
    console.log(data);
    fakeDelay(1500,(data)=>{
      console.log(data);
      fakeDelay(1000,(data)=>{
        console.log(data);
        fakeDelay(1000,(data)=>{
          console.log(data);
          fakeDelay(1000,(data)=>{
            console.log(data);
          })
        })
      })
    })
  });
}

// doingCallback();

// callback hell

// Promise

const myPromise = new Promise((resolve, reject)=>{
  const isCheck = true;
  if(isCheck){
    resolve("Thành công")
  }else{
    reject("Thất bại")
  }
})

// myPromise
//   .then((res) =>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log("Hoàn thành");
//   })

const delayPromise = (ms) => { // fake ra tác vu bất đồng bộ
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const isCheck = true;
      if(isCheck){
        resolve(`Chờ ... ${ms/1000}s`)
      }else{
        reject("Thất bại")
      }
    },ms)
  })
}

const doingPromise = () =>{
  delayPromise(2500)
    .then((data)=>{
      console.log(data);
      return delayPromise(1500)
    })
    .then((data)=>{
      console.log(data);
      return delayPromise(500)
    })
    .then((data)=>{
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
}

doingPromise()

