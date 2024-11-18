const precoAtual = 49.9;
const desconto = 0.05;
const novoPreco = precoAtual * (1 - desconto);

let precoFormatado = novoPreco.toFixed(2);

precoFormatado = precoFormatado.replace(".", ",");
console.log(`deu a louca no gerente, comprem por penas R$${precoFormatado}`);

// as vezes o JS tem problema em arredondar números
// usamos o toFixed para resolver esses problemas,
//(3) é o numero de casas decimais que desejo exibir
