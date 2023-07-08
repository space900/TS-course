// Перегрузки
function add(a: number, b: number): number; // Описываем одну и ту же функцию разными способами: здесь для number
function add(a: string, b: string): string; // Снова описываем: здесь string
// function add(a: number | string, b: number | string): string | number {}
function add(a: any,  b: any): any { // И теперь может использовать
    return a + b;
}
add('34', 'fd')

type asyncCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;
function asyncSum(a: number, b: number, cb?: asyncCb): any {
    const result = a + b;
    if (cb) {
        return cb(result)
    }

    return Promise.resolve(result);
}

asyncSum(1, 3, res => 1)