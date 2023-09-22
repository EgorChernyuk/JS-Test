'use strick'


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const size = 3;
    const sortStudensts = [], str = [];

    for (let i = 0; i <= arr.length; i++) {

        if (i < size) {
            sortStudensts.push(arr[i]);
        }else if (i < size * 2) {
            sortStudensts.push(arr[i]);
        }else if (i < size * 3) {
            sortStudensts.push(arr[i]);
        }else {
            str.push(arr[i]);
        }

    }    
    console.log([sortStudensts, `Оставшиеся студенты: ${str.length === 0 ? '-' : str.join(', ')}`]);
    return sortStudensts
}
sortStudentsByGroups([...students])




function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

