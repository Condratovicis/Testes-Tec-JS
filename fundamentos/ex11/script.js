const res = document.getElementById('res')

const geraTabuada = () => {
   const num = document.querySelector('#txtNum').value

   res.innerHTML = ''

   let cores = ['#3805c5', '#6133de']

   const randomIndex = Math.floor(Math.random() * cores.length)

   for(let i = 0;i <= 10;i++){
      res.style.backgroundColor = `${cores[randomIndex]}`
      res.innerHTML += `<tr><td>${num} X ${i} = ${num * i}</td></tr>`
   }
}