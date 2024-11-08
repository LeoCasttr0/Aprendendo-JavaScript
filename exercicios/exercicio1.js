// Questão 1) Leia o enunciado abaixo: “Voitto Cake gostaria de fazer um programa em JavaScript
//  para contabilizar quantos reais que ela ganha em determinado dia. Sabe-se que no primeiro dia foi vendido 5 bolos
//   de chocolate e 3 bolos de laranja.  Já  no  segundo  dia  venderam  3  bolos para  os  dois tipos.
//    Sabendo que o bolo de chocolate custa R$5,00 e o bolo de laranja R$3,00 reais. Calcule o valor
//     que a Voitto Cake faturou em cada dia.” As  variáveis  utilizadas  serão: valor_chocolate,
//      valor_laranja, quant_chocolate, quant_laranja, total_dia1,  total_dia2.  Declare corretamente as variaveis

const valor_chocolate = 5;
const valor_laranja = 3;

let quant_chocolate = 5;
let quant_laranja = 3;

const total_dia1 =
  valor_chocolate * quant_chocolate + valor_laranja * quant_laranja;

console.log("o total do dia 1 foi : " + total_dia1);

quant_chocolate = 3;
quant_laranja = 3;

const total_dia2 =
  valor_chocolate * quant_chocolate + valor_laranja * quant_laranja;
console.log("o total do dia 2 foi : " + total_dia2);
