//conversao de dados
// conversao implicita : o proprio JavaScript realiza em sua execução 

// conversao explicita : quando nós forçamos no codigo

// Exemplo implicita
// const numero1 = 8
// const numero2 = "9"
// const soma = numero1 + numero2
// mostrando o tipo da variavel
// console.log(typeof soma)

// Exemplo explicita
const numero1 = 8;
const numero2 = "9";
// transformei uma string em number
const soma = numero1 + Number(numero2);
console.log(soma);

// transformando o number em string
console.log(typeof String(numero1));

const string = "abc"
// forçando um string a ser um number,pois se remover o typeof. vai ser NAN
console.log(typeof Number(string))