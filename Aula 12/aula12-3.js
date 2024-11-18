const saudacao = "ola";
console.log(saudacao);

// note que podemos chamar uma funçao antes dela ser definida, com variaveis isso nao é possivel.

// existe um evento no js que se chama "hosting" que quando vc chama a função primeiro, ela eleva a definiçao do codigo para cima. oque eu quero dizer é que esta linha de codigo abaixo é executada antes da linha de cima deste texto.
darUmALo();
function darUmALo() {
  console.log("Olá Pessoal!");
}


