
//  JSON Objects example
//  [ {"text":"hey, "num":1}, {"text":"hi, "num":2}, {"text":"hola, "num":3} ]



const Todos = (callback)=>{

const request = new XMLHttpRequest();
request.addEventListener('readystatechange',
()=>{
  if(request.readyState===4 && request.status===200){
    
    const data = JSON.parse(request.responseText) //JSON objects to JS array
    
    callback(undefined,data)
  }else if(request.readyState===4){
    callback('could not fetch data',undefined)
  }
}

)
request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();
}

Todos((err,data)=>{
console.log('callback fired');
if(err){
  console.log(err)
}else{
  console.log(data)
}
})


