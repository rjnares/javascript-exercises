// const findTheOldest = function(people) {
//     people.sort((a, b) => {
//         const aYearOfDeath = "yearOfDeath" in a ? a.yearOfDeath : (new Date()).getFullYear();
//         const bYearOfDeath = "yearOfDeath" in b ? b.yearOfDeath : (new Date()).getFullYear();

//         const aYearsLived = aYearOfDeath - a.yearOfBirth;
//         const bYearsLived = bYearOfDeath - b.yearOfBirth;
//         return aYearsLived > bYearsLived ? -1 : 1;
//     });

//     return people[0];
// };

// Alternate
const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestYearOfDeath = oldest.yearOfDeath === undefined ? (new Date()).getFullYear() : oldest.yearOfDeath;
        const currentYearOfDeath = current.yearOfDeath === undefined ? (new Date()).getFullYear() : current.yearOfDeath;
        const oldestYearsLived = oldestYearOfDeath - oldest.yearOfBirth;
        const currentYearsLived = currentYearOfDeath - current.yearOfBirth;

        return currentYearsLived > oldestYearsLived ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
