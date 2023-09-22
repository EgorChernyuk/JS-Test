'use strick'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(family) {

    if (family.length > 0){

        for (let i = 0; i< family.length; i++) {

            let str = family.join(" ");
            console.log(str);
            return `Семья состоит из: ${str}`;
        }
    }else return 'Семья пуста'
    

}

showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(favoriteCities) {
    
    for (let i = 0; i< favoriteCities.length; i++){

        console.log(favoriteCities[i].toLowerCase());
        return favoriteCities[i].toLowerCase();
    }
    
}

standardizeStrings(favoriteCities);

