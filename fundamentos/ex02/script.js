let res = document.getElementById("res");
let sex = document.getElementsByName("radSex");

function calcularImc(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    res.innerHTML = ""

    if(altura == "" || peso == ""){
        res.innerHTML += "<p>insira algum valor</p>";
    }else{
        imc = (peso / (altura * altura)).toFixed(2);

        res.innerHTML += `O seu IMC é ${imc}`
    }
};