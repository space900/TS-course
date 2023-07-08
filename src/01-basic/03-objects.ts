interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown; // Динамическое свойство,
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: false,
}

const car2: Car = {
    wheels: 4,
    brand: 'Audi',
    type: 'Sedan',
    isNew: false,
}

car2['go'] = true;

export {}