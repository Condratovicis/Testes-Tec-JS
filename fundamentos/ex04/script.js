//[João pedro 17/04/2024] - Calculo de área e perímetro

function calculaAreaPerimetro(com,lar){
   this.com = com;
   this.lar = lar;

   this.consoleAreaPerimetro = () => {
      setTimeout(() => {
         let area = this.com * this.lar;
         let peri = 2 * (this.com + this.lar); 

         console.log(`Àrea: ${area}`);
         console.log(`Perímetro: ${peri}`);
      },500);
   };
};

const resultado = new calculaAreaPerimetro(10,20);
resultado.consoleAreaPerimetro();
