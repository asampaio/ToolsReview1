"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./domain/calc");
let printMessage = (msg) => console.log(`Mensagem: ${msg}`);
let msg = "Olá Switch-QA";
printMessage(msg);
let list = [1, 2, 3, 4];
let total = (0, calc_1.sumOnly)(...list);
printMessage(total.toString());
if (total > 0)
    printMessage(">0");
else {
    printMessage("<=0");
    printMessage("  <=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
    printMessage("<=0");
}
// student one: please replace by console.log
// student two: add to calc.ts a function sumWithDiscount(disc, valores)
