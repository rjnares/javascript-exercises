const palindromes = function (str) {
    const alphanumericChars = "abcdefghijklmnopqrstuvwxyz0123456789"

    const arr = str
        .toLowerCase()
        .split("")
        .filter((char) => alphanumericChars.includes(char))

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
