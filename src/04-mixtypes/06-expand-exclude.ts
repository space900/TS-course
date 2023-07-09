// Exclude - Исключи
type T0 = Exclude<'a' | 'b' | 'c' | 'd' | 'f', 'd' | 'a'>;
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b' | 'd'>;
type T2 = Exclude<string | number | (() => void), Function>;

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>
type TextStatus = Exclude<Status, number>

// Extract - Извлеки
type T00 = Extract<'a' | 'b' | 'c', 'a'>;
type T10 = Extract<'a' | 'b' | 'c', 'a' | 'b' | 'd'>;
type T20 = Extract<string | number | (() => void), Function>;

interface Person {
    age: number,
    firstName: string,
    lastName: string,
    sex: 'male' | 'female',
    country: string,
    education: string,
    phone?: string,
    yearOfBirth?: number,
    skills: string[],
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>
type PersonCountry = Exclude<keyof Person, 'age' | 'lastName' | 'education' | 'skills'>
type PersonStr = Extract<keyof Person, number>

// NonNullable - выбрасывает пустые значения
type T01 = NonNullable<string | number | undefined>
type T02 = NonNullable<string[] | null | undefined>

export function keys<T extends object>(obj: T): Extract<keyof T, string>[] {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }
    return currentKeys;
}

type Computer = {
    brand: string,
    year: number,
    isAvailable: boolean,
}
// Операция keyof Computer даст нам union строковых литералов, поэтому типы значений,
// которые могли бы быть назначены им в рамках алиаса Computer уже не важны.
type T001 = Extract<keyof Computer, string>
// Так как keyof Computer вернет union строковых литералов,
// то утилита Exclude исключит их все.
type T002 = Exclude<keyof Computer, string>

export {}