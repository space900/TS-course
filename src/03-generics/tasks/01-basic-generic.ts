// Затипизируйте данную функцию:
//     function append(el, list) {
//         return list.concat(el)
//     }

export function append<T>(el: T, list: T[]): T[] {
    return list.concat(el);
}

append(12, [123, 34])
append('123', ['s'])