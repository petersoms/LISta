var Veiculos = /** @class */ (function () {
    function Veiculos(c, a, d) {
        this.cor = c;
        this.ano = a;
        this.doc_ok = d;
    }
    Veiculos.prototype.exibirDocs = function () {
        console.log("O veiculo tem a cor ".concat(this.cor, ", ano ").concat(this.ano, " e o documento est\u00E1 ").concat(this.doc_ok, " "));
    };
    return Veiculos;
}());
var veiculo = new Veiculos("Verde", 2022, true);
veiculo.exibirDocs();
var Carros = /** @class */ (function () {
    function Carros() {
    }
    return Carros;
}());
var Motos = /** @class */ (function () {
    function Motos() {
    }
    return Motos;
}());
