import {User} from "./01-interfaces";

type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // будут храниться все варианты
type Union4 = Union1 & Union2; // a | c - будут храниться только одинаковые части
type Union5 = { a: string, b: string, c: number} & { a: string, t: boolean, z: null }

// const example: Union5 = {}

type Person = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

type Employee = {
    contractStart: Date,
    salary: number,
} & User & Person

// const user1: Employee = {}

type Developer = {
    skills: string[],
    phone: string,
    level?: Level,
    say(): void,
    code?: (arg: string) => void,
} & Employee