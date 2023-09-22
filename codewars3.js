'use strict';

function parityBit(binary) {
    //параметр принимает заданную СТРОКУ из 8-битовых кодов разделенных ПРОБЕЛОМ
    // console.log(binary);
    //переводим заданную строку из строки в массив строк убирая пробелы
    let splitArr = binary.split(" ")
    // console.log(splitArr);

    let ans = ''
    //цикл в котором проходим по массиву строк splitArr и должны записать ответы для каждой строки (элемента массива) чтобы потом вывести ответ
    for (let i = 0; i < splitArr.length; i++){

        //из строки делаем массив строк и убираем последний элемент
        let split = splitArr[i].split("").slice(0, -1)
        // console.log(split);

        //получаем последний элемент методом slice() и переводим из строки в число +(плюсиком)
        let lastSymbol = +splitArr[i].slice(-1)
        // console.log(lastSymbol);
        
        //из массива строк в массив чисел
        for (j = 0; j < split.length; j++){
            split[j] = +split[j]
        }
        // console.log(split);

        let sumBinary = 0
        for (k = 0; k < split.length; k++){
            sumBinary += split[k]
        }
        let isEven = sumBinary % 2
        if (isEven == lastSymbol){
            ans += split.join('')
            ans += ' '
        }
        else {
            ans += 'error '
        }
    }
    return ans.slice(0,-1)
}

// console.log(parityBit("01100011"))
console.log(parityBit("01101110 01100000 10100011 00111001 11001100"))
// console.log(parityBit("10100011 00111001 11001100"))
