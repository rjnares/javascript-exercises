const fibonacci = function(num) {
    if (typeof num !== "number") {
        num = parseInt(num);
    }

    if (num < 0) return "OOPS";
    if (num < 2) return num;
    
    let twoAgo = 0;
    let oneAgo = 1;
    
    for (let n = 2; n <= num; n++) {
        oneAgo += twoAgo;
        twoAgo = oneAgo - twoAgo;
    }
    return oneAgo;
};

// Do not edit below this line
module.exports = fibonacci;
