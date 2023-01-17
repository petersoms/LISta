var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* EXERCICIO 1 - criar três classes de objetos



    1ª - Classe de herois da Marvel
    2ª - Classe de Vingadores
    3ª - Classe de Vingadores que morreram no cinema

    Métodos: Voar, Correr Muito Rapido, Bater, Lutar
    Atributos: teletrasporte, Se Regenerar, Super Força, Imortalidade

    construir atraves do metodo construtor.

    VA TE CATAR!!

    */
var herois = /** @class */ (function () {
    function herois(m, n, a) {
        this.Metodo = m;
        this.Atributos = a;
        this.Nome = n;
    }
    herois.prototype.exibirDocs = function () {
        console.log("ALERTA INDIVIDUO ESTA ".concat(this.Metodo, " em dire\u00E7\u00E3o a base.\n         Checando Banco de Dados....\n         Acessando sistema da Lista de Herois....\n         Bem vindo ").concat(this.Nome, " -Titulo:").concat(this.Atributos, " "));
    };
    return herois;
}());
var Herois = new herois("Voando", "Lanterna Verde- Hal Jordan", "Primeiro Lanterna Humano");
Herois.exibirDocs();
var Vingadores = /** @class */ (function (_super) {
    __extends(Vingadores, _super);
    function Vingadores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vingadores.prototype.exibirDocs = function () {
        console.log("UM INDIVIDUO ESTA ".concat(this.Metodo, " EM DIRE\u00C7\u00C3O DA BASE.\n        CHECANDO IDENTIDADE....\n        IDENTIDADE DE \"VINGADOR\" AUTORIZADA....\n         A entrada de ").concat(this.Nome, " Foi autorizada\n        Titulo:").concat(this.Atributos, " "));
    };
    return Vingadores;
}(herois));
var vingadores = new Vingadores("Voando", "Thor", "Deus do Trovão");
vingadores.exibirDocs();
var VingadoresArrastaPraCima = /** @class */ (function (_super) {
    __extends(VingadoresArrastaPraCima, _super);
    function VingadoresArrastaPraCima() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VingadoresArrastaPraCima.prototype.superconstructor = function (m, n, a) {
        this.Metodo = m;
        this.Atributos = a;
        this.Nome = n;
    };
    VingadoresArrastaPraCima.prototype.exibirDocs = function () {
        console.log("HEROI GRAVEMENTE DURANTE".concat(this.Metodo, ".\n        CHECANDO IDENTIDADE....\n        IDENTIDADE DE \"VINGADOR\" RECONHECIDA....\n         Os restos de ").concat(this.Nome, " foram reconhecidos \n        \n         Titulo: Inut....(atualizando titulo para devida atribui\u00E7\u00E3o)....").concat(this.Atributos, "\n        enviado noticia para entes queridos e familia junto da lista de preparos para  honrarias finais... "));
    };
    return VingadoresArrastaPraCima;
}(herois));
var VAPC = new VingadoresArrastaPraCima("BATALHA CONTRA THANOS", "Homem de Ferro", "Heroi do Universo");
VAPC.exibirDocs();
