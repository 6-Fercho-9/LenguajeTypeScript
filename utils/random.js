"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarNumeroEnteroRandom = exports.mostrarNumerosRandom = void 0;
exports.generarArrayRandom = generarArrayRandom;
var mostrarNumerosRandom = function (n) {
    if (n === void 0) { n = 20; }
    for (var i = 0; i < n; i++) {
        console.log((0, exports.generarNumeroEnteroRandom)());
    }
};
exports.mostrarNumerosRandom = mostrarNumerosRandom;
function generarArrayRandom(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push((0, exports.generarNumeroEnteroRandom)());
    }
    return array;
}
var generarNumeroEnteroRandom = function () {
    var base = [10, 100, 1000];
    var random = generarNumeroRandomFlotanteEnIntervalo();
    var index = Math.floor(Math.random() * base.length);
    var signo = generarNumeroRandomEnteroEnIntervalo(0, 1) === 0 ? -1 : 1;
    return Math.floor(random * base[index]) * signo;
};
exports.generarNumeroEnteroRandom = generarNumeroEnteroRandom;
// retorna un random entero incluyendo el intervalo
function generarNumeroRandomEnteroEnIntervalo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// me generar un random float sin incluir el extremo superior
function generarNumeroRandomFlotanteEnIntervalo(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.random() * (max - min) + min;
}
