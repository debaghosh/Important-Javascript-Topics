const request = new XMLHttpRequest();
request.addEventListener('readystatechange',
()=>{
  if(request.readyState===4 && request.status===200){
    //success status code 200
    console.log(request, request.responseText)
  }else if(request.readyState===4){
    console.log("Data not fetched");
  }
}

)
request.open('GET','https://jsonplaceholder.typicode.com/todoss/');
request.send();
