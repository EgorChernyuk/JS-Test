'Use strict'
function fib(n) {

    if (typeof(n) !== "number" || n <= 0 ||!Number.isInteger(n)) {
        return "";
    } else if (n === 1) {
        return "0";
    }

    let resuslt = '';
    let first = 0; 
    let second = 1;

    for (let i = 0; i < n; i++) {

        if (i + 1 === n) {
            resuslt += `${first}`;

        }else {
            resuslt += `${first} `;     
        }

        let third = first + second;
        first = second;
        second = third; 
        
    }
    console.log(resuslt)
    return resuslt;  
}
fib(5);


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '0 1 ';
    let first = 1;
    let second = 2;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;    // 2
        first = second;       // 1
        second = third;       // 2
    }
    console.log(result);
    return result;
}

fib(2)