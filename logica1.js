// exercicio 1

if ((nota1 + nota2) / 2 >= 7) {
   console.log('aprovado');
} else if ((nota1 + nota2 + nota3) / 3 >= 5) {
   console.log('aprovado com exame');
} else {
   console.log('reprovado');
}

// exercicio 2

//   Determine qual de 3 números é o maior e qual é o menor.
// - Apresentar o maior e o menor;
// - Apresentar a diferença entre eles (maior e menor);
// - Se todos forem iguais, mostrar "números iguais”.

if (numb1 === numb2 && numb1 === numb3) {
   console.log('os numeros sao iguais');
} else if (numb1 >= numb2 && numb2 < numb3) {
   console.log(`O maior é ${numb1} e o menor é ${numb2}`);
   console.log(`A diferenca entre eles é: ${numb1 - numb2}`);
} else if (numb1 >= numb3 && numb3 < numb2) {
   console.log(`O maior é ${numb1} e o menor é ${numb3}`);
   console.log(`A diferenca entre eles é: ${numb1 - numb3}`);
} else if (numb2 >= numb1 && numb1 < numb3) {
   console.log(`O maior é ${numb2} e o menor é ${numb1}`);
   console.log(`A diferenca entre eles é: ${numb2 - numb1}`);
} else if (numb2 >= numb3 && numb3 < numb1) {
   console.log(`O maior é ${numb2} e o menor é ${numb3}`);
   console.log(`A diferenca entre eles é: ${numb2 - numb3}`);
} else if (numb3 >= numb1 && numb1 < numb2) {
   console.log(`O maior é ${numb3} e o menor é ${numb1}`);
   console.log(`A diferenca entre eles é: ${numb3 - numb1}`);
} else if (numb3 >= numb2 && numb2 < numb1) {
   console.log(`O maior é ${numb3} e o menor é ${numb2}`);
   console.log(`A diferenca entre eles é: ${numb3 - numb2}`);
}

// exemplo do else if menor
numb1 > numb2 ? console.log('ola') : console.log('vish');
