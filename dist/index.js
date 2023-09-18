"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
let printMessage = (msg) => console.log(`Mensagem: ${msg}`);
let msg = "Hello, TypeScript";
printMessage(msg);
//debugger;
let total = (0, calc_1.soma)(1, 2, 3, 4);
printMessage(total.toString());
