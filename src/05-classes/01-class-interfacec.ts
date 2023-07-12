interface ICar {
    go(speed: number): void,
    // maxSpeed?: number,
}

export class Car implements ICar{
    go(speed: number) {
        console.log('Let us go with speed', speed.toFixed());
    }
    stop() {
        console.log('Stopped');
    }
}

const car = new Car();
car.go(12)
// car.maxSpeed = 200 - будет ошибка, т.к. в самом классе не описан метод