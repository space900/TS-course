// Create two variants: aliases and interfaces

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

interface IProduct {
    title: string,
    price: number,
    isNew: boolean,
    isSale?: boolean,
}

interface IVehicle {
    brand: string,
    year: number,
    color: string,
}

interface ICar extends IProduct, IVehicle {
    type: string,
    model: string,
}

type Product = {
    title: string,
    price: number,
    isNew: boolean,
    isSale?: boolean,
}

type Vehicle = {
    brand: string,
    year: number,
    color: string,
}

type Car = {
    type: string,
    model: string,
} & Product & Vehicle

// const user1: IProduct = {}

