const x = 16
const isNegative = x >= 0 ? "no" : "yes"

interface StringRecord {
    [key: string]: string,
}

interface DataRecord {
    [key: string]: Date,
}

type MyRecord<T> = T extends string ? StringRecord : DataRecord

type Obj1 = MyRecord<string>
const o1: Obj1 = {
    r: '123',
}

export {}