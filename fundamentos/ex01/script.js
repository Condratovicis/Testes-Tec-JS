let escala = document.getElementsByName("radEsca");
let res = document.getElementById("res");


function calcular(){
    let temp = document.getElementById("txtTemp").value;
    res.innerHTML = "";
    
  if(temp != ""){
    if(escala[0].checked){
        res.innerHTML = `${temp}° Fahrenheit equivalem a ${(temp - 32) * 5/9}° Celsius`;
       }else{
        res.innerHTML = `${temp}° Celsius equivalem a ${(temp * 9/5) + 32}° Fahrenheit`;
       };
    }else{
        res.innerHTML += "<p>Coloque uma temperatura</p>"
    };
  
};

