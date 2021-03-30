

function retirement(retirementAge) {

    return function (yrBorn) {

        var age=2020-yrBorn
        console.log(retirementAge-age)
        
    }
    
}

//retirement(66)(1975)

//retirementGermany=(retirement(65))

//retirementGermany(1976)





function interviewQuestion(job) {

    return function (name) {

        if(job==='designer'){
            console.log(name+'what you teach?')
        }
        
    }
    
}





function interviewQuestion(job) {

    return function (name) {

        if(job==='teacher'){
            console.log(name+'what you teach?');
        }else if(job==='designer'){
            console.log(name+'what you design?')
        }
        
    }
    
}

interviewQuestion('teacher')('john')




