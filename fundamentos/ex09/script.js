const btn = document.querySelector('#btnTicket')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
   res.innerHTML = ''

   let preco = 2.50
   
   const idade = document.getElementById('txtIdade').value
   const escolaridade = document.getElementById('optEstudante').value

   if(idade == ''){
      res.innerHTML = 'Insira a idade'
   }else{
      if(idade < 6){
         res.innerHTML = 'Entrada Gratis'
      }else if(idade > 6 && escolaridade == 'Sim'){
        preco = preco / 2
        preco = preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
        res.innerHTML = `Total: ${preco}`
      }else if(idade >= 60){
         preco = preco - (preco * 30 / 100)
         preco = preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
         res.innerHTML = `Total: ${preco}`
      }else{
         preco = preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
         res.innerHTML = `Total: ${preco}`
      }
   }

})