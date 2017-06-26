function getValue1(){
  debugger;
  //simple promise with single call
  //creating promise
    let promise = new Promise((resolve, reject)=>{
      //creating XHLHttpRequest Object
      let xhttp = new XMLHttpRequest();
      //opening request for a url
      xhttp.open("GET", "http://localhost:3002/get/json", true);
      //when url responds .onload is called
      xhttp.onload = () => {
        //code based on status code
        if(xhttp.status == 200){
          resolve(xhttp.response);
        } else {
          reject(xhttp.statusText);
        }
      };
      //if error
      xhttp.onerror = () => {
        reject(xhttp.statusText);
      };
      //AJAX call
      xhttp.send();
    });
    //promise response based on resolve and reject
    promise.then( (result) => {
      document.querySelector("#showjson").innerHTML = result;
    }).catch((err) => {
      document.querySelector("#showjson").innerHTML = err;
    });
}

function getValue2(){
  debugger;
  //simple AJAX demo
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://localhost:3002/get/json", true);
      xhttp.onload = () => {
        debugger;
        if(xhttp.status == 200){
          document.querySelector("#showjson").innerHTML = xhttp.response;
        } else {
          document.querySelector("#showjson").innerHTML = xhttp.statusText;
        }
      };
      xhttp.onerror = () => {
        document.querySelector("#showjson").innerHTML = xhttp.statusText;
      };
      xhttp.send();
}

function getValue(){
  //chaning promise demo
  //requestHandler takes an url and returns a promise
  let promise = requestHandler("http://localhost:3002/get/student");
  //once promise resolved or rejected
  promise.then( (result) => {
    templating("Student", result);
    return requestHandler("http://localhost:3002/get/teacher");
  }).then((result) => {
    templating("Teacher", result);
    return requestHandler("http://localhost:3002/get/staff");
  }).then((result) => {
    templating("Staff", result);
  }).catch((err) => {
    document.querySelector("#showjson").innerHTML = err;
  });
}

function requestHandler(url){
  debugger;
  //return promise with AJAX fetch data
    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = () => {
        if(xhttp.status == 200){
          resolve(xhttp.response);
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = () => {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
}

function templating(value, content){
  //creating template to display data
  let element = document.createElement("p");
  element.id = value;
  element.innerHTML = value + ": " +content;
  document.querySelector("#showjson").append(element);
}
