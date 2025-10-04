
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

// doingPromise()

// async/await

const doingAsync = async () =>{
  try {
    console.log("Bắt đầu")
    console.log(await delayPromise(2000)); // bất đồng bộ
    console.log("Kết thúc");
    console.log(await delayPromise(1000));
    console.log(await delayPromise(1500));
  } catch (error) {
    console.log(error);
  }
}
// doingAsync()
// async function test (){}

const getData = async ()=>{
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`); // bất đồng bộ
    // console.log(res); // đồng bộ
    const data = await res.json();
    console.log(data);
    renderData(data)
  } catch (error) {
    alert("Lỗi: "+ error.message)
  }
}

getData();

const renderData = (list) =>{
  const liList = list.map((item,index)=>{
    return `<li>${index+1} | ${item.name} | ${item.phone} </li>`
  }).join('');

  // console.log(liList);
  const ulElement = document.querySelector('ul');
  ulElement.innerHTML = liList;
}