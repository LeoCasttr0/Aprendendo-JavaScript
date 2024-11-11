// Funções sao tipos de dados estruturados que trazem beneficios :

// deixa o código organizado.
// podemos usar diversas vezes.
//podemos identificar qual a funcionalidade do agrupamento, traz legibilidde.

let sapato = 200;
let blusa = 80;
let calca = 100;

// aplicando o desconto
sapato = sapato > 50 ? sapato * 0.5 : sapato * 0.7;

blusa = blusa > 50 ? blusa * 0.5 : blusa * 0.7;

calca = calca > 50 ? calca * 0.5 : calca * 0.7;

console.log(sapato)
console.log(blusa);
console.log(calca);

// TIVEMOS QUE FAZER ESSA FUNÇAO DE DESCONTO 3 VEZES, VAMOS MUDAR ISSO E MELHRAR O CODIGO ?. VAMOS PARA A ATIVIDADE 12-2