let sapato = 200;
let blusa = 80;
let calca = 100;

// aplicando o desconto
sapato = aplicarDesconto(sapato);

blusa = aplicarDesconto(blusa);

calca = aplicarDesconto(calca);

console.log(sapato);
console.log(blusa);
console.log(calca);

// funçao com parametro e reposta

function aplicarDesconto(precoOriginal) {
  const precoDesconto =
    precoOriginal > 50 ? precoOriginal * 0.5 : precoOriginal * 0.7;
  return precoDesconto;
}
