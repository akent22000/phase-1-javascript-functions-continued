// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`)

}

saturdayFun()
saturdayFun('bath my dog')


function mondayWork(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`)

}

mondayWork()
mondayWork('work from home.')



function wrapAdjective(wrapper = "*") {
    function emphatic(string = "specialr") {
        return `You are ${wrapper}${string}${wrapper}!`
    }
    
    return emphatic
    
}

let result = wrapAdjective("||")
result("a dedicated programmer")