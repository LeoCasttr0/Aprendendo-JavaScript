const nome = ""

if (nome) {
  console.log("fala ai, " + nome);
} else{
    console.log("fala ai, gente fina");
}

// truthy e falsy :
// quando algum tipo de dado é levado para o contexto boleano (condicional) true ou false

// falsy : 0, false, strings vazias,null, undefined,nan

// truthy: todo o resto

console.log(!!0)
console.log(!!"0");
console.log(!!"123");
console.log(!!NaN);