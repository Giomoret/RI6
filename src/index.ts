import Soma from "./soma";
import Subtracao from "./subtracao";
import Multiplicacao from "./multiplicacao";
import Divisao from "./divisao";
import Equacao from "./equacao";

const soma = new Soma();
const sub = new Subtracao();
const mult = new Multiplicacao();
const div = new Divisao();
const eq = new Equacao();
//xsqdl
console.log("--- Testando Operações Básicas ---");
console.log(`Soma (10 + 5): ${soma.calcular(10, 5)}`);
console.log(`Subtração (10 - 5): ${sub.calcular(10, 5)}`);
console.log(`Multiplicação (10 * 5): ${mult.calcular(10, 5)}`);
console.log(`Divisão (10 / 5): ${div.calcular(10, 5)}`);

console.log("\n--- Testando Equação de 2º Grau ---");
// Exemplo: x² - 5x + 6 = 0 (Raízes: 2 e 3)
console.log(`Equação (1, -5, 6): ${eq.calcular(1, -5, 6)}`);

// Exemplo: x² - 4x + 4 = 0 (Raiz única: 2)
console.log(`Equação (1, -4, 4): ${eq.calcular(1, -4, 4)}`);