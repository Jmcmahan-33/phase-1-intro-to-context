// Your code here

let createEmployeeRecord = function(info) {
    // console.log(info)
    return {
    firstName: info[0],
    familyName: info[1],
    title:info[2],
    payPerHour: info[3],
    timeInEvents: [],
    timeOutEvents: [],
    }   

}

function createEmployeeRecords(employeeInfo) {
    // console.log(employeeInfo)
    return employeeInfo.map(function(info) {
        console.log(info)
        return createEmployeeRecord(info)
    
    })
   
}


function createTimeInEvent(obj,stamp) {
    // console.log(parseInt(stamp.split(" ")[1]))
    const punchIn = {
        type: "TimeIn",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0],

    }
    obj.timeInEvents.push(punchIn)
    // console.log(obj)
    return obj
}


function createTimeOutEvent(obj,stamp) {
    // console.log(parseInt(stamp.split(" ")[1]))
    const punchOut = {
        type: "TimeOut",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0],

    }
    obj.timeOutEvents.push(punchOut)
    // console.log(obj)
    return obj
}

function hoursWorkedOnDate(employee, choosenDate) {
    // console.log("this is the choosen date", choosenDate)
    let timeInObject = employee.timeInEvents.find(obj => obj.date === choosenDate )
    let timeOutObject = employee.timeOutEvents.find(obj => obj.date === choosenDate)
    return(timeOutObject.hour - timeInObject.hour) / 100
}

// calculates the hours worked when given an employee record and a date
function wagesEarnedOnDate(employee, payDate) {
    // console.log("Help me", pay)
    // pseudocode 
    // giving a date, calculate the hours worked and return the appropriate wage
    //expecting  worked 2 hours to earn 54 dollars
    let pay = hoursWorkedOnDate(employee, payDate)
    * employee.payPerHour
    // console.log("Help me", employee.payPerHour)
    return parseInt(pay)
}

function allWagesFor(employee) {
    //pay owed for all dates
    // console.log("find dates", employee.timeInEvents)
    let allDates = employee.timeInEvents.map( (e) => {
        // map through each object value "date"
        // console.log("Come on now", e.date)
        return e.date
        //returns all dates worked 
    })
    // console.log("nearly there",egibleForPay)
    let egibleForPay = allDates.reduce(function(note, d){
        console.log("test",note + wagesEarnedOnDate(employee, d))
        return note + wagesEarnedOnDate(employee, d)
    },0)
    return egibleForPay
}

function calculatePayroll(array) {
    console.log("final log", array)
    return array.reduce(function(note, records){
        return note + allWagesFor(records)
    },0)

    //return the sum of pay owed to all employees, for all dates, as a number
    // return parseInt()
}

//  pseudocode
// create a function that records employee info  when a employee punches in and out. 
// for everytime a person punches(click) in
// return the result(text recording their time such as clock in: 1300hrs)
// for every time the person clocks out,
// return the text of when the person clocks out.


//createTimeIn Pseudocode



// test cases
// expecting punch in to record the punch in time 
// expexting punch out to record clock out. 



