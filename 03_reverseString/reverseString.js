const reverseString = function(input) {
    let reversedString = "";

    for (let idx = input.length - 1; idx >= 0; idx--) {
        reversedString += input.at(idx);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
