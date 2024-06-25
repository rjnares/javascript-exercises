const repeatString = function(string, timesToRepeat) {
    if (timesToRepeat < 0) {
        return "ERROR";
    }

    let result = "";
    
    for (let i = 0; i < timesToRepeat; i++) {
        result += string;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
