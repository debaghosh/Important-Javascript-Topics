// JSON Objects
// in luigi.json -> [{"text":"hey"},{"text":"hi"},{"text":"hello"}]
// in maria.json -> [{"text":"bye"},{"text":"sayonara"},{"text":"annyeoung"}]
// in deba.json  -> [{"text":"bleh"},{"text":"duh"},{"text":"haa"}]


const Todos = (resource, callback)=>{

const request = new XMLHttpRequest();
request.addEventListener('readystatechange',
()=>{
  if(request.readyState===4 && request.status===200){
    
    const data = JSON.parse(request.responseText)
    callback(undefined,data)
  }else if(request.readyState===4){
    callback('could not fetch data',undefined)
  }
}

)
request.open('GET',resource);
request.send();
}

//Callback hell --> too many callbacks :(
Todos('luigi.json',(err,data)=>{
  console.log(data);
  Todos('maria.json',(err,data)=>{
    console.log(data);
    Todos('deba.json',(err,data)=>{
      console.log(data);
})

})

})
