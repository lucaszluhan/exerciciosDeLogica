function fibo(numb) {
   let sequencia = [1, 1];
   for (i = 0; i < numb - 2; i++) {
      sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);
      console.log(sequencia);
   }
}
fibo(100);

//CONSEGUI AAAAAAAAAAAA
//valeu kkkkkk
// a + a = b
// a + b = c
// b + c = d
// c + d = e

function fat(num1) {
   let arr = [num1];
   let w = num1 - 1;
   for (let i = 0; i < num1 - 2; i++) {
      arr.push(arr[arr.length - 1] * w);
      w--;
   }
   console.log(arr[arr.length - 1]);
}
fat(10);

// ---------------- inutil divisao

function div(num2) {
   let arr2 = [num2];
   let y = [num2 - 1];
   for (i = 0; i < num2; i++) {
      if (y > 0) arr2.push(arr2[arr2.length - 1] / y);
      y--;
   }
   console.log(arr2[arr2.length - 1]);
}
div(30);
