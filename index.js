
let returnFirstTwoDrivers = function (Drivers) {
    return Drivers.slice(0, 2);
}

let returnLastTwoDrivers = function (Drivers) {
    return Drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function (createdMultiplier) {
    return function (someValue) {
        return createdMultiplier * someValue;
    }
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function (Drivers, resultEitherDrivers) {
    return resultEitherDrivers(Drivers);
}


