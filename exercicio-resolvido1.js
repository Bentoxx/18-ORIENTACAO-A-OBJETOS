var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.soma = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.subtracao = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.multiplicacao = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.divisao = function () {
        return this.numero1 / this.numero2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(3, 9);
console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.divisao());
console.log(calculadora.multiplicacao());
