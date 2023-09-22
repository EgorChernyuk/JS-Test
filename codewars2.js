'use strict';

cycle = function(sequence){
    y = 0
    n = 0
    for (let i = 0; i < sequence.length - 1; i++) { 
        for(let j = i + 1; j < sequence.length; j++){
            if (sequence[i] == sequence[j]){
                y = j - i
                n = i
                return [n, y]

            }

        
        }
        
    }
    return []
}
console.log(cycle([2, 0, 6, 3, 1, 6, 3, 1, 6, 3, 1]))