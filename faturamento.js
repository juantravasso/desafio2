const fs = require('fs');

const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

var valores = data.filter(dia => dia.faturamento > 0).map(dia => dia.faturamento);
var menorValor = Math.min(...valores);
var maiorValor = Math.max(...valores);
var mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
var diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorValor}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor}`);
console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
