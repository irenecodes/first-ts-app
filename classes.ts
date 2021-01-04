// Instance Method Modifiers 
// public - can be called anywhere anytime 
// private - can only be called by other methods in this class 
// protected - can be called by other methods in this class, or by other methods in child classes. Cannot be called outside child 

class Vehicle {
    // adding fields (property): 
    constructor(public color: string) {}

    public drive(): void {
        console.log('vroom.');
    }
    protected honk(): void {
        console.log('beep.');
        
    }
}


const car3 = new Vehicle('orange');
// won't work bc protected
// car3.honk()
console.log(car3.color);


// can overwrite methods 
class Car extends Vehicle {
    drive(): void {
        console.log('zoom zoom.');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

// const car2 = new Car();
// car2.drive();
// car2.startDrivingProcess()
// car2.honk();