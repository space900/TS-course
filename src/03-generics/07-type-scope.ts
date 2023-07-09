export function tuplePairCreator<T>(first: T) {
    return function<U>(second: U): [T, U] {
        return [first, second]
    }
}

const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1('wr');
const val2 = toTupleWith1(['wd'])