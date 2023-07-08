type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish { // функция защитник, которая предназначена доказать что pet содержит определенный ключ Fish
    return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim()
    }
    return animal.fly();
}

