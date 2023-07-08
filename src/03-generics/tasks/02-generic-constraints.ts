// Опишите типы для двух функций:
export function keys<T extends object>(obj: T): Array<keyof T>{
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }
    return currentKeys;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}

const obj1 = {a: 1, b: 2, c: 3}
keys([1])
values(['1'])