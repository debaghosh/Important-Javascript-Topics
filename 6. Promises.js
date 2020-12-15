// Basic working
let p = new Promise((resolve,reject)=>{
  let a = 1+1;//1+3
  if(a===2){
    resolve("Success");
  }else{
    reject("failed");
  }
})

p.then((message)=>{
  console.log(message);
}).catch((message)=>{
  console.log(message);
})
