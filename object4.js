'use strict'

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },    
    ],
    height: 10,
    moneyPer1m3: 30,
    budget: 50
}
function isBudgetEnough(data) {

    const {shops} = data;
    let mall = "";
    let sumAllArea = 0;
    let areaMall = 0;
    let volCenter = 0;
    for (let key in shops) {
        mall = Object.values(shops[key]);
        areaMall = mall.reduce((width, length) => width * length);
        sumAllArea += areaMall;
        if (sumAllArea > 0){
            volCenter = sumAllArea * shoppingMallData.height;
    }
    if (shoppingMallData.budget > (volCenter * shoppingMallData.moneyPer1m3)){
        return 'Бюджета достаточно';
    }else {
        return 'Бюджета недостаточно';
    }
}
}
isBudgetEnough(shoppingMallData);



//Вариант 2 

function isBudgetEnoughV2(data) {

    let square = 0;
    let volume = 0;

    data.shops.forEach(shops => {
        square += shops.width * shops.height;
    });
    volume = data.height * square;
    
    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    }else {
        return 'Бюджета недостаточно'
    }
    
}

isBudgetEnoughV2(shoppingMallData);



