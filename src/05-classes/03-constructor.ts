export class Vehicle{
    constructor(private createdAt: Date) {
    }
    public drive(speed: number) {
        console.log('Let us go with speed', speed.toFixed());
        this.log(speed);
    }
    public stop() {
        console.log('Stopped');
    }
    private log(speed: number) {
        console.log('Vehicle has changed speed to', speed, this.createdAt);
    }
    protected alternativeLog(text: string) {
        console.log(text.toUpperCase)
    }
}

export class Car extends Vehicle {
    // public color: string;
    // public maxSpeed: number;

    constructor(public readonly color: string, public maxSpeed: number) {
        super(new Date());
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
}

const car1 = new Car('red', 200)