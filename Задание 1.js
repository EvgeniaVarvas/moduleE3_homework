/*Задание 1.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/

function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let item of arr) {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                zeroCount++;
            } else if (item % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Чётные элементы: ${evenCount}`);
    console.log(`Нечётные элементы: ${oddCount}`);
    console.log(`Нулевые элементы: ${zeroCount}`);
}

const array = [1, 2, 3, 4, 5, 0, null, 'string', undefined];
countEvenOddZero(array);
