// Funçao de aplicar desconto usando arrow function:
// usamos o parametro preço original;
// usamos o return para ele nos retornar este valor;
// se o preço original for maior que 50, desconto de 50%, se nao, de 70%;

const aplicarDesconto = (precoOriginal) => {
  return precoOriginal > 50 ? precoOriginal * 0.5 : precoOriginal * 0.7;
};

// preços dos itens
let sapato = 200;
let blusa = 80;
let calca = 100;

// Aplicando o desconto nos itens
sapato = aplicarDesconto(sapato);
blusa = aplicarDesconto(blusa);
calca = aplicarDesconto(calca);

// retornando
console.log(sapato);
console.log(blusa);
console.log(calca);
