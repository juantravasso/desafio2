function isFibonacci(num) {
    var a = 0, b = 1, temp;

    if (num === a || num === b) return true;

    while (b <= num) {
        temp = a;
        a = b;
        b = temp + b;

        if (b === num) return true;
    }

    return false;
}

var number = 21; 
console.log(isFibonacci(number) ? `${number} pertence à sequência de Fibonacci` : `${number} não pertence à sequência de Fibonacci`);
