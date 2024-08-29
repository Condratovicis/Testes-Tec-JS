const res = document.querySelector('#res')

function classifica(){
   const idade = document.querySelector('#idade').value

   if(idade === ""){
      res.innerHTML = '<p>Insira sua idade</p>'
   }else{
      res.innerHTML = ''

      const img = document.createElement('img')
      const resultado = document.createElement('h3')

      res.appendChild(img)
      res.appendChild(resultado)

      if(idade <= 12){
         resultado.textContent = 'Criança'
         img.src = './img/img-01.jpg'
      }else if(idade > 12 && idade <= 17){
         resultado.textContent = 'Adolescente'
         img.src = './img/img-02.jpg'
      }else if(idade >= 18 && idade < 59){
         resultado.textContent = 'Adulto'
         img.src = './img/img-03.jpg'
      }else if(idade > 59){
         resultado.textContent = 'idoso'
         img.src = './img/img-04.jpg'
      }
   }

}