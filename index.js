
  

  const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
  }

  const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
  }

  let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

  function createFareMultiplier(x){
    return function multiply(y){
        return x * y
    }
  }

  function fareDoubler(x){
    return x * 2
  }

  function fareTripler(x){
    return x * 3
  }

  const selectDifferentDrivers = function(drivers , x){
    if(x = returnFirstTwoDrivers()){
        return drivers.slice(0 , 2)
    }else if (x = returnLastTwoDrivers()){
        return drivers.slice(-2)
    }
  }