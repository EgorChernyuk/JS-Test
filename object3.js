'use strick'
const someString = 'This is some strange string';

function reverse(someString) {
    
    if (someString.length > 0) {

        let reverseNewStr = [...someString].reverse().join("");

        console.log(reverseNewStr);

        return 
        
    } else return 'Ошибка!'
}
reverse(someString)




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    let str = "";
    if (arr.length === 0) {
        str = "Нет доступных валют";
    }else {
        str = 'Доступные валюты:\n';
    }
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === missingCurr) {
            continue;
        }
        str += `${arr[i]}\n`
        
    }
    return str;
}

availableCurr([[...baseCurrencies, ...additionalCurrencies]], 'CNY');