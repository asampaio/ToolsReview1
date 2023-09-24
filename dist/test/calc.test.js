"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const calc_1 = require("../domain/calc");
test("verifica resultado", () => {
    let result = (0, calc_1.sumOnly)(1, 2, 3, 4, 5);
=======
const calc_1 = require("../calc");
test("verifica resultado", () => {
    let result = (0, calc_1.soma)(1, 2, 3, 4, 5);
>>>>>>> 167c1869fc29a0aab4ace30ffc79ed79a1a84dc0
    expect(result).toBe(15);
});
