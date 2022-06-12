const employee = {
    name: "sam",
    streetAddress: 1022
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newObject = {...employee, ...{[key]: value}}
    //return Object[key] = value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    //return employee[name] = '12 Broadway'
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){

    let newList = {...employee}
    delete newList[key]
    return newList
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}