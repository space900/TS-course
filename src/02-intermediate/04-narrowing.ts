function example(x?: number | string) {
    if (typeof x === 'string') {
        x.toLowerCase()
    } else if (typeof x === 'number') {
        x.toFixed()
    } else if (x === undefined) {
        console.log('no value')
    } else {
        x
    }
}

function example2(strs: string | string[] | null) { // string[] и null могут быть объектом
    // if (typeof strs === 'object') {} - может вызвать проблему из-за типа null
    // if (Array.isArray(strs)) {} - норм альтернативный вариант
    if (strs && typeof strs === 'object') { // strs && проверяем на присутствие
        strs.push('1')
    } else if (typeof strs === 'string') {
        strs.toLowerCase()
    }
}

function example3 (x: number[] | Date) {
    if (x instanceof Date) {
        x.getDate();
    } else {
        x.concat([])
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        return animal.swim()
    }
    return animal.fly();
}

export {}