'use strick'
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            java: '50%'

        },
        exp: '3 month'
    },
    showAgeAndLangs: function (plan) {

        const {age} = plan;
        const {languages} = plan.skills;
        console.log(languages);
        let str = `Мне ${age} и я владею языками: `;
    
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience() {

    for (let key in personalPlanPeter) {
        
        if (typeof(personalPlanPeter[key]) === 'object') {
            for (let i in personalPlanPeter[key]) {

                if ( i === 'exp') {
                    
                    return personalPlanPeter[key][i];
                    
                }
                
            }
        }
    }
}
showExperience(personalPlanPeter)
    
function showProgrammingLangs(personalPlanPeter) {

    let ans = ""

    for (let key in personalPlanPeter){

        if (key == 'skills') {

            for (let i in personalPlanPeter[key]) {

                if (i == 'programmingLangs') {

                    for (let j in personalPlanPeter[key][i]) {
                        ans += `Язык ${j} изучен на ${personalPlanPeter[key][i][j]}\n`;

                    }

                }

            }
        }
    }
    return ans
}
showProgrammingLangs(personalPlanPeter);

