const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '1$'
        },
        {
            name: 'Pizza Diavola',
            price: '1$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (((+fDish.price) + (+sDish.price)) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(...data) {
    const copy = Object.assign({}, data);

    copy.waitors += {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);