let form = document.getElementById("form");
let error = document.getElementById("error");
let concl = document.getElementById("conclusion");

function mensagem(){
   let nome = document.getElementById("txtNome").value;
   let idade = document.getElementById("txtIdade").value;
   let cidade = document.getElementById("txtCidade").value;

   if((nome == "" || idade == "") || cidade == ""){
      error.style.display = "inline";
   }else{
      error.style.display = "none";
      form.style.display = "none";
      concl.style.display = "flex";

      concl.innerHTML = `<p>Olá ${nome}, você tem ${idade} anos e mora em ${cidade}</p>`;
   };
};