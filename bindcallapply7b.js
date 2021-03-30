var years=[1990, 1980, 1970, 1960, 1950];

function arrayCalc(arr, fn) {

    arrRes=[];

    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calcAge(yrBorn) {

    return 2020-yrBorn
    
}


var age=arrayCalc(years,calcAge)
console.log(age)

function isFullAge(yrBorn) {
    return yrBorn>40
    
}



var ages= arrayCalc(age,isFullAge.bind(this, 50))
console.log(ages)


