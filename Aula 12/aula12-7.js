// gerar senha aleatoria
function gerarSenha() {
  // criamos uma variavel que vai receber um  retorno de uma operaçao matematica: Math
  // ramdom : aleatorio
  //  como queremos 6 digitos, queremos pegar do numero 100000 ate 999999.
  //  no final arredondamos o calculo.

  const senha = Math.round(Math.random() * (999999 - 100000) + 100000);
  //   usado para podermos acessar o valor de senha fora da função.
  return senha;
  //   encerra a execuçao da funçao
}
// variavel para receber o valor da função, criado fora dela
const senha = gerarSenha();
console.log(senha);
