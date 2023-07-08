// Array<string> - это дженерик
// string []
// Promise<number>

type TypeFactory<T> = T
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

export function toArray<T>(...arg: T[]): T[] {
    return arg;
}

toArray(1, 2, 3)
toArray('er', 'ewf')

function head(value: string): string;
function head(value: []): undefined;
function head<T>(value: readonly T[]): T;

function head<T>(value: T[]): T;
function head(value: any): any {
    return value[0];
}

head(['123', '124', ['12312', '214r']])

const head1 = <T>(value: T[]): T => value[0]

interface ModelData<T> {
    title: string,
    value: T, // number [] boolean
}

const obj1: ModelData<number> = {
    title: 'sda',
    value: 12,
}

const obj2: ModelData<Array<number>> = {
    title: '1234r',
    value: [12]
}
