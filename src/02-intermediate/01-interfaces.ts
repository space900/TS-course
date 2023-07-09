// прописываем export interface, чтобы защитить от непредсказуемого импорта в глобальную область,
// и при необходимости уже импортируем где надо
export interface User {
    readonly email: string,
    readonly login: string,
    password: string,
}

export interface User {
    isOnline?: boolean,
}
// Расширение интерфейся window до глобального, иначе ошибка
declare global {
    interface Window {
        isAuth?: boolean;
    }
}
/*interface Window {
    isAuth?: boolean;
}*/
window.isAuth

interface Person {
   readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

interface Employee extends User, Person{
    contractStart: Date,
    salary: number,
}

interface Developer extends Employee{
    skills: string[],
    phone: string,
    level?: Level,
    say(): void,
    code?: (arg: string) => void,
}

// class MyDeveloper implements Developer {}

export {}