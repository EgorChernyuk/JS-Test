'use strict';

function firstTask() {
    let num = 5
    while (num < 10){
        console.log(num);
        num++
    }

    return num
}
console.log(firstTask())


// При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
    for (i=20; i >= 1 ; i--){
        if (i === 13) {
            break;
        }
        console.log(i);

    }
    return i
}  
console.log (secondTask());




// При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {
    for (i=2; i < 10; i++){
        if(i % 2===0 || i == 10){
            console.log(i);
           
        }
    }
    return i
}
console.log(thirdTask());



// Перепишите цикл  for на вариант с while. 
// Результат должен остаться точно таким же. 
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// 3
// 5
// 7
// 9
// 11
// 13
// 15


for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
}

let numbers = 17;
while (numbers < 16){
    console.log(numbers);
     
}
// *
// **
// ***
// ****
// *****
// ******
// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {
//     for ( let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log (result)

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask()
function firstTask() {
    let arr = [3, 5, 8, 16, 20, 23, 50];
    let result = [];
    result = arr;
    return result;
}
console.log(firstTask());


function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i<data.length; i++) {
        if ( typeof(data[i]) === `number`){
            data[i] *= 2;
        }
        else (data[i] += ' - done')      
    }
    // Не трогаем
    return data;
}
secondTask()

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 1; i<data.length; i++) {
            result[i - 1] = data[data.length - i]
    } 
    console.log(result)
    
    // Не трогаем
    return result;
}
thirdTask()