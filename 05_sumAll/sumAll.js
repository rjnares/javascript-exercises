const sumAll = function(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        return "ERROR";
    }
    
    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min > max) {
        [min, max] = [max, min];
    }

    let sum = 0;

    for (let num = min; num <= max; num++) {
        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
