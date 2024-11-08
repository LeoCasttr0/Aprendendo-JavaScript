// Questão 4) Leia o enunciado abaixo: 
// “O  SAC  da  Voitto  prioriza  pessoas  com  mais  de  60  anos  para  o atendimento. 
// Para isso ela verifica se você tem no mínimo 60 anos, caso isso seja verdade ela te encaminha para a fila preferencial. 
// Caso não, ela pede para você aguarda o atendimento na fila.” Utilize o operador ternário para verificar essa condiçao

const idade = 65

const resultado = idade >59 ? "voce vai para a fila preferencial" : "aguarde na fila";

console.log(resultado);