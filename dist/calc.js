"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = void 0;
function soma(...parcelas) {
    return parcelas.reduce((total, parcela) => total + parcela);
}
exports.soma = soma;
