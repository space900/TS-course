const numbers = [1, 2, 3, 4];

const strs: string[] = [];
const strs2: Array<string> = [];
strs.push('es')


interface Car {
    wheels: number;
    brand: string;
}

const cars: Car[] = [];
cars.push({brand: 'Audi', wheels: 5, type: ''});
[ [1, 3], [2, 4] ];
const arrOfArr: string[][] = [];
arrOfArr.push(['', ''])

function printArr(arr: unknown[]) {
    arr.forEach((el, index) => {
        console.log(el, index)
    })
}
