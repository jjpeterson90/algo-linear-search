const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) return i;
        if (i === arrayToSearchThrough.length-1) return undefined;
    }
};

exports.linearSearchGlobal = function (valueToFind, arrayToSearchThrough) {
    let result = [];
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) result.push(i)
        if (i === arrayToSearchThrough.length-1 && result === []) return undefined;
        if (i === arrayToSearchThrough.length-1 && result !== []) return result;
    }
};