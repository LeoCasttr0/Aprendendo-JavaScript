let nome = "Carlos";
function darUmALo(nome = "rapazeada", periodo) {
  // Caso não tenhamos um nome definido, ela vai assumir outro valor, o padrao
  console.log(`Eae, ${nome}, boa ${periodo}`);
}

// nosso codigo tem 2 parametros, nao é recomendado usar mais que 3
darUmALo(nome, "tarde");
