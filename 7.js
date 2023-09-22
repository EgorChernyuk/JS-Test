'use strict'


function calculateVolumeAndArea (length) {
    
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }
    let volume = 0
        area = 0

        volume = length * length * length;
        area = 6 * (length * length);
    return `'Объем куба: ${volume}, площадь всей поверхности: ${area}'`
    
}
calculateVolumeAndArea();



function getCoupeNumber(numberPlace) {

    if (numberPlace === 0 || numberPlace > 36) {
        return 'Таких мест в вагоне не существует';
    }
    else if (numberPlace < 0 || typeof(numberPlace) == "string" || !Number.isInteger(numberPlace)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
 
    let numberCoupe = 0;
    numberCoupe = numberPlace / 4;
    return Math.ceil(numberCoupe);
    
}
getCoupeNumber();


function getTimeFromMinutes(intNumberMinutes) {
    
    
    if (!Number.isInteger(intNumberMinutes) || intNumberMinutes < 0 ) {
        // console.log ("Ошибка, проверьте данные")
        return "Ошибка, проверьте данные";
    }
    
    let min = 0;
    let hour = 0;
    hour = Math.floor(intNumberMinutes / 60);
    min = Math.floor(intNumberMinutes) - (hour * 60);

    if (hour % 10 == 1 ) {
        // console.log (`Это ${hour} час и ${min} минут`)
        return `Это ${hour} час и ${min} минут`
    } else if (hour % 10 == 2 || hour % 10 == 3 || hour % 10 == 4) {
        // console.log (`Это ${hour} часа и ${min} минут`);
        return `Это ${hour} часа и ${min} минут`;
    }else {return `Это ${hour} часов и ${min} минут`} 

    // console.log (`Это ${hour} часов и ${min} минут`)
}
getTimeFromMinutes(100);


function findMaxNumber(num1, num2, num3, num4) {
                
    const arr = [num1, num2, num3, num4];
    for (let i = 0; i < arr.length; i++) {
        if (!arr.length == 4 || typeof(arr[i]) == "string" || arr[3] == undefined) {
            console.log ("0");
            return '0';
        }
        const arrCompare = [...arr].sort((a, b) => a - b);
        console.log (arrCompare[3]);
        return arrCompare[3];
        
    }
}
findMaxNumber(10)

const arr = [1, 2, 3, 5];
for (let i = 0; i < 6; i++) {
    if (arr.length < 6 || typeof(arr[i]) == "string")  {
        console.log (typeof(arr[i]))
        console.log ('0')
    }
}

console.log (arr);





