function sum(a: number, b: number) {
    return a + b;
}

const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number) {
    return a + b;
}

sum(2, 3)
sum3(3, 4)
function log(name: string, userId?: string) {
    console.log('Hello', name, 'with ID', userId || 'anonymous');
}

log('Mikhail', '213')
// never никогда не завершится, если ошибка гарантирована
function crash(): never {
    throw new Error('crash')
}

export function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0)

    return sum / nums.length;
}

// export {};