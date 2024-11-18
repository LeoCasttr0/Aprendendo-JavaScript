// Operador Ternario
// 3 operandos : condiçao, se verdade e se falso.

const idade = 16;
const pais = "EUA"
const resultado = idade >= 18 ? "Aprovado" : pais === "EUA" && idade>= 16 ? "Aprovado" : "Reprovado";
console.log(resultado);
