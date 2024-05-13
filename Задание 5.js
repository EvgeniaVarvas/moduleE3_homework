/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.
*/

class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        this.pluggedIn = true;
        console.log(`Прибор ${this.name} включен. Потребляемая мощность: ${this.power} Вт.`);
    }

    turnOff() {
        this.pluggedIn = false;
        console.log(`Прибор ${this.name} выключен.`);
    }
}

class DeskLamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(brightness) {
        this.brightness = brightness;
        console.log(`${this.name} яркость: ${this.brightness}.`);
    }
}

class Computer extends Appliance {
    constructor(name, power, cpu) {
        super(name, power);
        this.cpu = cpu;
    }

    runProgram(program) {
        console.log(`${this.name} запускает программу: ${program}.`);
    }
}

const lamp = new DeskLamp('Настольная лампа', 50, 'средняя');
const computer = new Computer('Компьютер', 500, 'Intel Core i7');

lamp.turnOn();
computer.turnOn();

computer.runProgram('VSCode');

console.log(lamp);
console.log(computer);

lamp.turnOff();
computer.turnOff();

