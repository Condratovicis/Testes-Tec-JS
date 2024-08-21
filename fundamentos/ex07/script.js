const res = document.getElementById('res')

function comparaNumeros () {
   let n1 = Number(document.querySelector('#n1').value)
   let n2 = Number(document.querySelector('#n2').value)

   if(n1 == '' || n2 == ''){
      res.innerHTML = 'Insira os valores'
   }else{
      if(n1 > n2){
         res.innerHTML = `O número ${n1} é maior que ${n2}`
      }else if(n1 < n2){
         res.innerHTML = `O número ${n1} é menor que ${n2}`
      }else{
         res.innerHTML = `Os números são iguais`
      }
   }
}