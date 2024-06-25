const leapYears = function(year) {
    const divByFour = year % 4 == 0;
    const divByOneHundred = year % 100 == 0;
    const divByFourHundred = year % 400 == 0;

    return divByFour && (!divByOneHundred || divByFourHundred);
};

// Do not edit below this line
module.exports = leapYears;
