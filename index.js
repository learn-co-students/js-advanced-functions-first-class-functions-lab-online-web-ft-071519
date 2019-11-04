// Code your solution in this file!
const  returnFirstTwoDrivers = function (driverArr) {
    let result = [...driverArr.slice(0,2)]
    return result
}

const returnLastTwoDrivers = function (drivers) {
    let result = [...drivers.slice(-2)]
    return result
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int= 2) {
    return function (fare) {
        return fare * int;
    }
}

const fareDoubler = function (fare) {
    return createFareMultiplier()(fare);
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare);
    
}


const selectDifferentDrivers = function (drivers, fn) {
    return fn(drivers)
}