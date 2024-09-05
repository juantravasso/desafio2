function inverterString(str) {
    var invertida = '';
    for (var i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}


var string = "Hello World";
console.log(inverterString(string));
