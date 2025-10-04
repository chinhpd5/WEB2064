
const hello = () =>{
  console.log("Xin chào");
}

// const greeting = (callback) =>{
//   callback()
// }

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
  console.log("Bắt đầu");
  fakeDelay(2000,(data)=>{
    console.log(data);
    console.log("Kết thúc");

    // ====
    fakeDelay(1500,(data)=>{
      console.log(data);

      //===
      fakeDelay(1000,(data)=>{
        console.log(data);
        
      })
    })
  });
}

doingCallback();