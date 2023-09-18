
export function soma(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela);
} 