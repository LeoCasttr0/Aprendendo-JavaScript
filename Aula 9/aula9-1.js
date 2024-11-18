// condicionais

const notaJoao = 5.6;

if (notaJoao >= 6) {
  console.log("aprovado !");
  // só vai avaliar se a primeira n for verdadeira
} else if (notaJoao >= 5 && notaJoao < 6) {
  console.log("foi por pouco, faça uma prova final");
} else {
  console.log("estude mais, reprovado");
}
