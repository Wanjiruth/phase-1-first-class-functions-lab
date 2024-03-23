// Code your solution in this file!
// returnFirstTwoDrivers function
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  }
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  }
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
  }
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = (drivers, selectorFunction) => {
    return selectorFunction(drivers);
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  