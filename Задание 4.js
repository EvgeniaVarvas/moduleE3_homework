/*Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
 */


function Appliance(name,power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

Appliance.prototype.turnOn = function() {
    this.pluggedIn = true;
    console.log(`Прибор ${this.name} включен. Потребляемая мощность: ${this.power} Вт.`);
};

Appliance.prototype.turnOff = function() {
    this.pluggedIn = false;
    console.log(`Прибор ${this.name} выключен.`);
};


function DeskLamp(name, power, brightness) {
    this.name = name;
    this.power = power;
    this.brightness = brightness;
}
DeskLamp.prototype = new Appliance();

DeskLamp.prototype.adjustBrightness = function(brightness) {
    this.brightness = brightness;
    console.log(`${this.name} яркость: ${this.brightness}.`);
};

function Computer(name, power, cpu){
    this.name = name;
    this.power = power;
    this.cpu = cpu;
}
Computer.prototype = new Appliance();

Computer.prototype.runProgram = function(program) {
    console.log(`${this.name} запускает программу: ${program}.`);
};


const lamp = new DeskLamp('Настольная лампа', 50, 'средняя');
const computer = new Computer('Компьютер', 500, 'Intel Core i7');

lamp.turnOn();
computer.turnOn();

computer.runProgram('VSCode');

console.log(lamp);
console.log(computer);

lamp.turnOff();
computer.turnOff();



