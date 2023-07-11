export {}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

// Record - 1й параметр: допустимый тип значений или ключей, 2й параметр: допустимые значения
type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

// const myBrands: BrandNames = {
//     apple: '123',
// }

// Pick - 1й параметр объектная структура, 2й параметр юнион
interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number,
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
    id: 'sa',
    title: 'Learn TS',
    completed: false,
}
// Omit - обратное действие утилиты Pick, 2й параметр выбрасывает ненужные поля
type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;

type NewTodo = Pick<Todo, 'title' | 'description'>


