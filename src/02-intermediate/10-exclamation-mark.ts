// Оператор ! - Мы точно знаем, что значение есть, то что может в теории быть null или undefined сейчас им не является
// Подойдет на стадии разработки и тестов
// В продакшене не рекомендуется использовать (это может быть небезопасно), более предпочтительны TypeGuards, Asserts и тд, '!'
let word: string | null = null;

const numb = 10;
if (numb > 5) {
    word = 'abc'
}

// word = 'abc';
console.log(word!.toUpperCase());

function printName(name?: string) {
    const fullName: string = name!;
}

interface Person {
    name: string,
    age: number,
    sex: 'female' | 'male'
}

function printName2(person?: Person) {
    console.log(person!.name)
}


const people: Person[] = [
    {
        name: 'Jerry',
        age: 32,
        sex: 'male',
    },
    {
        name: 'Eva',
        age: 21,
        sex: 'female',
    },
    {
        name: 'Andy',
        age: 22,
        sex: 'male',
    },
]

const femalePeople = people.find(person => person.sex === 'female')!


