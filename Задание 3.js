
/*Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.
*/


function createAdder(x) {
        function adder(y) {
            return x + y;
        }
        return adder;
    }
    
const addFive = createAdder(5);

console.log(addFive(7)); 