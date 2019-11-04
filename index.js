// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(1).slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(value) {
    return function(fare){
        return value * fare 
    } 
};

const fareDoubler = function(value){
    return value * 2
};

const fareTripler = function(value){
    return value * 3
};

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };