const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

var total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

for (const [estado, valor] of Object.entries(faturamento)) {
    var percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
