
import { soma } from "../calc";

test("verifica resultado", ()=>{
    let result = soma(1,2,3,4,5);
    expect(result).toBe(15);
})