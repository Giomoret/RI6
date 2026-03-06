import Calculo from "./calculo";

export default class Equacao extends Calculo {

    // n1 = a, n2 = b, n3 = c
    public calcular(n1: number, n2: number, n3: number = 0): any {
        const a = n1;
        const b = n2;
        const c = n3;

        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            return 'Não existem raízes reais.';
        } else if (delta === 0) {
            const x = -b / (2 * a);
            return `A equação possui uma raiz real: x = ${x}`;
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `As raízes da equação são: x1 = ${x1}, x2 = ${x2}`;
        }
    }
}