"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOnly = void 0;
function sumOnly(...parcelas) {
    return parcelas.reduce((total, parcela) => total + parcela);
}
exports.sumOnly = sumOnly;
