const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(Math.max(driversArray.length - 2), driversArray.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

fareDoubler = function(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

// I believe something is wrong with the test.
// const selectDifferentDrivers = function(driversArray, driverFunction) {
//     return driverFunction(driversArray);
// }
// ***Nevermind it needed to be a function and not a variable of a function...sigh.
function selectDifferentDrivers(driversArray, driverFunction) {
    return driverFunction(driversArray);
}

