var numer0 = 125.45

var dinheiro = numero.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'});

console.log(dinheiro);


const str = '100,00'
const strNum = str.replace(/[^0-9]/g, '')
console.log(strNum) // 10000
