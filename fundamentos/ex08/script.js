function calculadora (n1,n2, ope){
   switch (ope){
      case '+':
         return n1 + n2
         break
      case '-':
         return n1 - n2
         break
      case '/':
         return n1 / n2
         break
      case '*':
         return n1 * n2
         break
      default:
         return ('Operador invalido');
   }
}

console.log(calculadora(10,7, '+'))
console.log(calculadora(17,13, '-'))
console.log(calculadora(10,4, '/'))
console.log(calculadora(20,2, '*'))
console.log(calculadora(20,2, '0'))


