let nome = "carlos";

// parametro
function darUmALo(nome) {
  nome = "leo";
  console.log(`Eae, ${nome}`);
}

// Argumento : valor que passamos
darUmALo(nome);
console.log(nome);

// Mudamos o nome apenas dentro da função
// fora dela, o contexto é o valor da variavel normal
