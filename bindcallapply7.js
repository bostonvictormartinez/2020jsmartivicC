var john={
    name:'John',
    age:26,
    job:'teacher',
    presentationFormalFriendly:function(style, timeOfDay){

        if(style==='formal'){
            console.log('formal wear'+timeOfDay+this.name+this.job+this.age)
        }else if(style==='friendly'){
            console.log('SUP wear'+timeOfDay+this.name+this.job+this.age)

        }

    }
}

emily={
    name:'Emily',
    job:'designer',
    age:26
}

john.presentationFormalFriendly('formal','morning');
john.presentationFormalFriendly.call(emily,'friendly','evening');
