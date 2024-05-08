
/*Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

function isPrime(number) {
    if (number <= 1 || number > 1000) {
        console.log("Данные неверны");
        return;
    }

    let isPrimeNumber = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        console.log(`${number} - простое число`);
    } else {
        console.log(`${number} - не простое число`);
    }
}
