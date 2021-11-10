let notas = [10, 8, 6.7, 9.2];

function media(arr) {
   let soma = 0;
   for (let i = 0; i < arr.length; i++) {
      soma = soma + arr[i];
   }
   let media = (soma / arr.length).toFixed(1);
   console.log(`A media das notas é ${media}`);
}

media(notas);
