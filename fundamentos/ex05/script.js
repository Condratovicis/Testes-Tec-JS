//Verificação de divisibilidade 

function verificaDivi(n1,n2){
   if(n1 % n2 === 0){
      return "O numero " + n1 + " é divisivel por " + n2;
   }else{
      return "não é divisivel";
   };
};

console.log(verificaDivi(10,2));
console.log(verificaDivi(15,6));
console.log(verificaDivi(21,9));