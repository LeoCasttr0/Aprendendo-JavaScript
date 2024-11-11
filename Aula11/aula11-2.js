// quantas caracteres tem em uma string
let nome = "Leo Castro";
// o espaço entre o nome e o sobrenome conta como um caracter. entao criamos uma nova variavel para transformar o espaço em nada. utilizando o replace e no final usando o length para contar no final o numero
quantiLetras = nome.replace(" ", "").length;

console.log(`Meu nome é ${nome} e ele contem ${quantiLetras} letras`);

console.log(nome.replaceAll("e", "r"))

// formatando a string
nome = "lEo CAstrO"

console.log(nome.toUpperCase())
console.log(nome.toLowerCase());