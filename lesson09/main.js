// cách 1
const sayHello = () =>{
  console.log("Xin chào");
}

const greeting = (callback) =>{
  callback();
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
  console.log(1);
  delayCallback(2000,(data)=>{
    console.log(data);
    console.log(3);

    //----
    delayCallback(1500,(data)=>{
      console.log(data);

      //----
      delayCallback(1000,(data)=>{
        console.log(data);
      })
    })
  })
  
}

doingCallback()
