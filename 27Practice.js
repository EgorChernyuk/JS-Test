'use strict';

function sayHello(name) {
        return `Привет, ${name}!`;
}
sayHello('Alex');


function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}
returnNeighboringNumbers(5);



function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0){
        return num
    }
    let str = '';
    for (i = 1; i <= times; i++){
        if (i === times){
            str += `${num * i}`;

        }
        else {
            str += `${num * i}---`;
            console.log(str)

        }
    } 
    return str
}
getMathResult(5, 3)