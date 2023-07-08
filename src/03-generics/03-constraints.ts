// Добавление требований происходит через ключевое слово extends
function len<T extends {length: number}>(arg: T): number {
    return arg.length;
}

len('abc')
len(['abc'])
len({ length: 12 })
// len(123)
// len(true)
export const obj1 = { a: 1, length: 1 }
len(obj1);

// object