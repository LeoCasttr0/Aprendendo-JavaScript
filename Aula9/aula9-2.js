// aumento de salario conforme a meta usando if
// tudo isto é boolean
const metaDeVendas = 5000;
const vendasdDeJuliana = 7000;
let salarioDeJuliana = 3000;

if (vendasdDeJuliana >= metaDeVendas) {
  salarioDeJuliana = salarioDeJuliana * 1.2;
}

console.log("o salario de juliana é :" + salarioDeJuliana);

console.log(typeof (vendasdDeJuliana >= metaDeVendas));