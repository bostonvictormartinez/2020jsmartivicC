var john={
    name:'john',
    age:26,
    job:'teacher',
    presentationFormalFriendly:function (style,timeOfDay) {

        if(style==='formal'){
            console.log('time of day is '+timeOfDay+this.name+this.age+this.job)
        }else if(style==='friendly'){
            console.log('SUP'+timeOfDay+this.name+this.age+this.job )
        }
        
    }
}

john.presentationFormalFriendly('friendly', 'morning')