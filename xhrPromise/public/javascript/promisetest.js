function getValue(){
  debugger;
    let promise = new Promise((resolve, reject)=>{
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://localhost:3000/get/json", true);
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

    promise.then( (result) => {
      document.querySelector("#showjson p").innerHTML = result;
    }).catch((err) => {
      document.querySelector("#showjson p").innerHTML = err;
    });
}

function getValueComment(){
  debugger;
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://localhost:3000/get/json", true);
      xhttp.onload = () => {
        debugger;
        if(xhttp.status == 200){
          document.querySelector("#showjson p").innerHTML = xhttp.response;
        } else {
          document.querySelector("#showjson p").innerHTML = xhttp.statusText;
        }
      };
      xhttp.onerror = () => {
        document.querySelector("#showjson p").innerHTML = xhttp.statusText;
      };
      xhttp.send();
}
